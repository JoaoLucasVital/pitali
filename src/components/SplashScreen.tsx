import { useEffect, useRef, useState } from 'react';
import '../styles/splash.css';

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const panel = overlay.current;
    const view = canvas.current;
    if (!visible || !panel || !view) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const transparency = window.matchMedia('(prefers-reduced-transparency: reduce)');
    const previousFocus = document.activeElement;
    const previousOverflow = document.documentElement.style.overflow;
    const backgrounds = Array.from(document.querySelectorAll<HTMLElement>('main, header, footer')).filter(node => !panel.contains(node));
    const previousInert = backgrounds.map(node => node.inert);
    let disposed = false;
    let exiting = false;
    let restored = false;
    let renderCleanup: (() => void) | undefined;
    let animation: Animation | undefined;
    backgrounds.forEach(node => { node.inert = true; });
    document.documentElement.style.overflow = 'hidden';
    panel.focus({ preventScroll: true });

    function restore() {
      if (restored) return;
      restored = true;
      document.documentElement.style.overflow = previousOverflow;
      backgrounds.forEach((node, i) => { node.inert = previousInert[i]; });
      if (!panel?.contains(document.activeElement)) return;
      if (previousFocus instanceof HTMLElement && previousFocus !== document.body && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      } else {
        const heading = document.getElementById('hero-title');
        if (heading) {
          const previous = heading.getAttribute('tabindex');
          heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true });
          if (previous === null) heading.removeAttribute('tabindex'); else heading.setAttribute('tabindex', previous);
        }
      }
    }
    function finish() {
      if (disposed) return;
      renderCleanup?.(); renderCleanup = undefined;
      restore(); setVisible(false);
    }
    function leave(immediate = false) {
      if (disposed) return;
      if (immediate) { exiting = true; animation?.cancel(); finish(); return; }
      if (exiting) return;
      exiting = true;
      // Keep the final glass frame alive throughout the swipe. Losing the
      // WebGL context here can flash a white canvas on mobile Safari.
      if (!panel?.animate) { finish(); return; }
      animation = panel.animate(reduce.matches ? [{ opacity: 1 }, { opacity: 0 }] : [
        { transform: 'translateY(0)' }, { transform: 'translateY(-101%)' },
      ], { duration: reduce.matches ? 180 : 500, easing: 'cubic-bezier(0.77, 0, 0.175, 1)', fill: 'forwards' });
      animation.finished.then(finish).catch(() => {});
    }
    const timer = window.setTimeout(() => leave(), reduce.matches ? 650 : 3200);
    const failsafe = window.setTimeout(() => leave(true), 5000);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); leave(true); }
      if (event.key === 'Tab') { event.preventDefault(); panel?.focus(); }
    };
    const onVisibility = () => { if (document.hidden) leave(true); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('visibilitychange', onVisibility);
    if (!reduce.matches && !transparency.matches) {
      import('../lib/glassReveal').then(({ startGlassReveal }) => {
        if (disposed || exiting) return;
        renderCleanup = startGlassReveal(view, () => { if (!disposed && !exiting) panel.dataset.glass = 'ready'; });
      }).catch(() => { /* The supplied logo remains visible without WebGL. */ });
    }
    return () => {
      disposed = true; window.clearTimeout(timer); window.clearTimeout(failsafe);
      document.removeEventListener('keydown', onKey); document.removeEventListener('visibilitychange', onVisibility);
      renderCleanup?.(); animation?.cancel(); restore();
    };
  }, [visible]);

  if (!visible) return null;
  return <div ref={overlay} className="pitali-splash" tabIndex={-1} role="dialog" aria-modal="true" aria-label="Boas-vindas à Pitali">
    <div className="splash-topline" aria-hidden="true"><span>Sol e movimento</span><span>Pitali</span></div>
    <div className="splash-stage">
      <div className="splash-fallback" aria-hidden="true"><img src="/images/pitali-wordmark-transparent.webp" alt="" width="940" height="200" /></div>
      <canvas ref={canvas} className="splash-glass" aria-hidden="true" />
    </div>
  </div>;
}
