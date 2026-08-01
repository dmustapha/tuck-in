import { ingredients, type IngredientId } from '../catalog';
import { BackButton, PrimaryButton, Shell } from '../ui';

type Props = { selectedIds: IngredientId[]; onToggle: (id: IngredientId) => void; onNext: () => void; onBack: () => void };

export function FridgeShelf({ selectedIds, onToggle, onNext, onBack }: Props) {
  const ready = selectedIds.length === 3;
  return <Shell>
    <p className="eyebrow">02 FRIDGE SHELF</p><h1>What still has a little to give?</h1><p className="subtle">Tap three that could become tomorrow.</p>
    <div className="count" aria-live="polite">{selectedIds.length} of 3 selected</div>
    <div className="ingredient-grid">{ingredients.map((item) => <button key={item.id} className={`ingredient ${item.tone} ${selectedIds.includes(item.id) ? 'selected' : ''}`} aria-pressed={selectedIds.includes(item.id)} onClick={() => onToggle(item.id)}><i>{item.icon}</i><strong>{item.label}</strong><small>{item.descriptor}</small><b>{selectedIds.includes(item.id) ? '✓' : ''}</b></button>)}</div>
    <div className="screen-foot"><PrimaryButton disabled={!ready} onClick={onNext}>Pick these three <span>→</span></PrimaryButton><BackButton onClick={onBack} /></div>
  </Shell>;
}
