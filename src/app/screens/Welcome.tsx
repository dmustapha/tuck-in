import { BrandLogo, PrimaryButton, Shell } from '../ui';

export function Welcome({ onNext }: { onNext: () => void }) {
  return <Shell>
    <header className="masthead"><BrandLogo /><span>01</span></header>
    <p className="eyebrow">01 WELCOME</p>
    <div className="welcome-copy"><h1>Three overlooked things. One good tomorrow.</h1><p>A tiny ritual for what is already in the fridge.</p></div>
    <div className="lunchbox-face" aria-hidden="true"><i /><b>•　•</b><small>⌣</small></div>
    <div className="screen-foot"><div className="progress">● ━ ━</div><PrimaryButton onClick={onNext}>Open the fridge <span>→</span></PrimaryButton><p>→ 02 Fridge shelf</p></div>
  </Shell>;
}
