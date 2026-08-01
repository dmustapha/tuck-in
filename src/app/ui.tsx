import type { ButtonHTMLAttributes, ReactNode } from 'react';

export function Shell({ children }: { children: ReactNode }) {
  return <main className="shell"><section className="phone">{children}</section></main>;
}

export function BrandLogo() {
  return <img className="brand-logo" src="/logo.svg" alt="Tuck In logo" />;
}

export function PrimaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`primary ${props.className ?? ''}`} />;
}

export function BackButton({ onClick }: { onClick: () => void }) {
  return <button className="back" onClick={onClick}>← Back</button>;
}
