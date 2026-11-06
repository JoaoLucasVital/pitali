import type { ReactNode } from 'react';
import { Button, Glass } from 'glisse';

export function GlassLink({ href, children, external = false, className = '' }: {
  href: string; children: ReactNode; external?: boolean; className?: string;
}) {
  return <Glass className={`pitali-glass-link ${className}`}>
    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>
  </Glass>;
}

export function ScrollTopButton() {
  return <Button className="pitali-glass-button" tint="#80621f" onClick={() => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }}>Voltar ao início <span aria-hidden="true">↑</span></Button>;
}
