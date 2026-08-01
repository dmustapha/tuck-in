import { BackButton, PrimaryButton, Shell } from '../ui';

export function Constraint({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return <Shell>
    <div className="topline"><span className="dotline">•••</span><span className="eyebrow">04 CONSTRAINT</span></div><div className="constraint"><i>● ● ●</i><h1>Keep it warm, bright, and a little crunchy.</h1><p>That is enough of a shape for tomorrow.</p></div>
    <div className="screen-foot"><PrimaryButton onClick={onNext}>Pack it for tomorrow <span>→</span></PrimaryButton><BackButton onClick={onBack} /></div>
  </Shell>;
}
