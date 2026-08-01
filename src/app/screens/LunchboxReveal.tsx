import { ingredients, type IngredientId } from '../catalog';
import { BackButton, PrimaryButton, Shell } from '../ui';

export function LunchboxReveal({ selectedIds, onNext, onBack }: { selectedIds: IngredientId[]; onNext: () => void; onBack: () => void }) {
  const chosen = ingredients.filter((item) => selectedIds.includes(item.id));
  return <Shell>
    <p className="eyebrow">STEP 5 OF 6</p><h1>Tomorrow, handled.</h1><div className="packed-lunchbox" data-testid="lunchbox-selection">{chosen.map((item) => <article className={item.tone} key={item.id}><i>{item.icon}</i><small>{item.label}</small></article>)}</div><p className="center-note">Tuck it in. Close the lid.</p>
    <div className="screen-foot"><PrimaryButton onClick={onNext}>See tomorrow <span>→</span></PrimaryButton><BackButton onClick={onBack} /></div>
  </Shell>;
}
