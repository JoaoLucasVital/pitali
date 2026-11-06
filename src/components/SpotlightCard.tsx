import type { PointerEvent, ReactNode } from 'react';

// Spotlight inspirado na referência de @jahed. A luz é mascarada na borda;
// a fotografia permanece intacta e não depende de hover no celular.
export default function SpotlightCard({ children }: { children: ReactNode }) {
  function track(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
    card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
  }
  return <article className="spotlight-card" onPointerMove={track}>{children}</article>;
}
