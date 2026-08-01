import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { App } from './App';

async function openFridge() {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: /open the fridge/i }));
  return user;
}

async function choose(user: ReturnType<typeof userEvent.setup>, labels: string[]) {
  for (const label of labels) {
    await user.click(screen.getByRole('button', { name: new RegExp(label, 'i') }));
  }
}

describe('Tuck In ritual', () => {
  it('shows the approved logo on the welcoming screen', () => {
    render(<App />);

    expect(screen.getByRole('img', { name: /tuck in logo/i })).toHaveAttribute('src', '/logo.svg');
  });

  it('starts Screen 02 empty and only enables its CTA at three choices', async () => {
    const user = await openFridge();
    expect(screen.getByText('0 of 3 selected')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /pick these three/i })).toBeDisabled();

    await choose(user, ['Leftover rice', 'Roasted carrots', 'Egg']);
    expect(screen.getByText('3 of 3 selected')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /pick these three/i })).toBeEnabled();
  });

  it('prevents a fourth ingredient from being selected', async () => {
    const user = await openFridge();
    await choose(user, ['Leftover rice', 'Roasted carrots', 'Egg']);
    await user.click(screen.getByRole('button', { name: /sesame/i }));

    expect(screen.getByText('3 of 3 selected')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sesame/i })).toHaveAttribute('aria-pressed', 'false');
  });

  it('carries a non-default trio through the board and lunchbox', async () => {
    const user = await openFridge();
    await choose(user, ['Green beans', 'Sesame', 'Chili crisp']);
    await user.click(screen.getByRole('button', { name: /pick these three/i }));

    expect(screen.getByRole('heading', { name: /a good little trio/i })).toBeInTheDocument();
    expect(screen.getByTestId('selection-board')).toHaveTextContent('Green beans');
    expect(screen.getByTestId('selection-board')).toHaveTextContent('Sesame');
    expect(screen.getByTestId('selection-board')).toHaveTextContent('Chili crisp');

    await user.click(screen.getByRole('button', { name: /give it a shape/i }));
    await user.click(screen.getByRole('button', { name: /pack it for tomorrow/i }));
    expect(screen.getByTestId('lunchbox-selection')).toHaveTextContent('Green beans');
    expect(screen.getByTestId('lunchbox-selection')).toHaveTextContent('Sesame');
    expect(screen.getByTestId('lunchbox-selection')).toHaveTextContent('Chili crisp');
  });

  it('preserves selection on Back and clears it only on restart', async () => {
    const user = await openFridge();
    await choose(user, ['Leftover rice', 'Roasted carrots', 'Egg']);
    await user.click(screen.getByRole('button', { name: /pick these three/i }));
    await user.click(screen.getByRole('button', { name: /back/i }));
    expect(screen.getByText('3 of 3 selected')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /pick these three/i }));
    await user.click(screen.getByRole('button', { name: /give it a shape/i }));
    await user.click(screen.getByRole('button', { name: /pack it for tomorrow/i }));
    await user.click(screen.getByRole('button', { name: /see tomorrow/i }));
    await user.click(screen.getByRole('button', { name: /start another tuck-in/i }));
    await user.click(screen.getByRole('button', { name: /open the fridge/i }));

    expect(screen.getByText('0 of 3 selected')).toBeInTheDocument();
  });
});
