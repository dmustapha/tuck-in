import { ingredients, type IngredientId } from '../catalog';
import { BackButton, PrimaryButton, Shell } from '../ui';

export function ThreePickBoard({ selectedIds, onNext, onBack }: { selectedIds: IngredientId[]; onNext: () => void; onBack: () => void }) {
  const chosen = ingredients.filter((item) => selectedIds.includes(item.id));
  return <Shell>
    <div className="topline"><BackButton onClick={onBack} /><span className="pill">✓ picked 3 of 3</span></div><h1>A good little trio.</h1>
    <div className="paper-stack" data-testid="selection-board">{chosen.map((item) => <article key={item.id} className={`paper ${item.tone}`}><i>{item.icon}</i><div><strong>{item.label}</strong><small>{item.descriptor}</small></div><span>→</span></article>)}</div>
    <div className="mini-lunchbox" aria-label="The open lunchbox is ready">{chosen.map((item) => <i className={item.tone} key={item.id}>{item.icon}</i>)}</div><p className="center-note">the open lunchbox is ready</p>
    <div className="screen-foot"><PrimaryButton onClick={onNext}>Give it a shape <span>→</span></PrimaryButton></div>
  </Shell>;
}
