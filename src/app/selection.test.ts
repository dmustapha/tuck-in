import { describe, expect, it } from 'vitest';
import { orderSelection, toggleSelection } from './selection';

describe('selection model', () => {
  it('adds an unselected ingredient', () => {
    expect(toggleSelection([], 'rice')).toEqual(['rice']);
  });

  it('removes a selected ingredient', () => {
    expect(toggleSelection(['rice'], 'rice')).toEqual([]);
  });

  it('does not add a fourth ingredient', () => {
    expect(toggleSelection(['rice', 'carrots', 'egg'], 'sesame')).toEqual([
      'rice',
      'carrots',
      'egg'
    ]);
  });

  it('uses shelf order downstream instead of click order', () => {
    expect(orderSelection(['chili', 'beans', 'sesame'])).toEqual([
      'beans',
      'sesame',
      'chili'
    ]);
  });
});
