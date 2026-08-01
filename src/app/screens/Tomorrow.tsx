import { BrandLogo, PrimaryButton, Shell } from '../ui';

export function Tomorrow({ onRestart }: { onRestart: () => void }) {
  return <Shell>
    <header className="masthead"><BrandLogo /><span>06</span></header><p className="eyebrow">TRACKED IN</p><div className="tomorrow"><i>✦</i><h1>You left yourself something good.</h1><p>One less decision for tomorrow-you.</p></div>
    <div className="screen-foot"><PrimaryButton onClick={onRestart}>Start another tuck-in <span>↻</span></PrimaryButton></div>
  </Shell>;
}
