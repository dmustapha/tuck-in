import { useState } from 'react';
import type { IngredientId } from './catalog';
import { orderSelection, toggleSelection } from './selection';
import { Constraint } from './screens/Constraint';
import { FridgeShelf } from './screens/FridgeShelf';
import { LunchboxReveal } from './screens/LunchboxReveal';
import { ThreePickBoard } from './screens/ThreePickBoard';
import { Tomorrow } from './screens/Tomorrow';
import { Welcome } from './screens/Welcome';

type ScreenId = 1 | 2 | 3 | 4 | 5 | 6;

export function App() {
  const [screen, setScreen] = useState<ScreenId>(1);
  const [selectedIds, setSelectedIds] = useState<IngredientId[]>([]);
  const selection = orderSelection(selectedIds);
  const toggle = (id: IngredientId) => setSelectedIds((current) => toggleSelection(current, id));
  const restart = () => { setSelectedIds([]); setScreen(1); };

  if (screen === 1) return <Welcome onNext={() => setScreen(2)} />;
  if (screen === 2) return <FridgeShelf selectedIds={selection} onToggle={toggle} onNext={() => setScreen(3)} onBack={() => setScreen(1)} />;
  if (screen === 3) return <ThreePickBoard selectedIds={selection} onNext={() => setScreen(4)} onBack={() => setScreen(2)} />;
  if (screen === 4) return <Constraint onNext={() => setScreen(5)} onBack={() => setScreen(3)} />;
  if (screen === 5) return <LunchboxReveal selectedIds={selection} onNext={() => setScreen(6)} onBack={() => setScreen(4)} />;
  return <Tomorrow onRestart={restart} />;
}
