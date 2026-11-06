import { useEffect, useRef } from 'react';
import { GlassLink, ScrollTopButton } from './GlassControls';

export default function MotionFooter() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    async function start() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (disposed || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo('.mf-content', { y: -70 }, { y: 0, ease: 'none', scrollTrigger: {
          trigger: root.current, start: 'top bottom', end: 'bottom bottom', scrub: true,
        } });
      }, root.current);
      cleanup = () => media.revert();
    }
    start().catch(() => {});
    return () => { disposed = true; cleanup?.(); };
  }, []);

  return <footer ref={root} className="motion-footer" aria-label="Rodapé Pitali">
    <div className="mf-content">
      <div className="mf-top">
        <div className="mf-invitation">
          <p className="mf-label">Beachwear &amp; fitwear</p>
          <h2>Entre o sol<br />e o movimento.</h2>
          <GlassLink href="https://www.instagram.com/pitali.oficial/" external>Acompanhe a Pitali <span aria-hidden="true">↗</span></GlassLink>
        </div>
        <nav className="mf-nav" aria-label="Navegação do rodapé">
          <p className="mf-label">Explore</p>
          <a href="#inicio">Início</a>
          <a href="#looks">Em destaque</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#fitwear">Fitwear</a>
          <a href="#universo">Universo Pitali</a>
          <a href="https://www.instagram.com/pitali.oficial/" target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
      <div className="mf-wordmark" aria-hidden="true">PITALI</div>
      <div className="mf-bottom"><span>© {new Date().getFullYear()} Pitali</span><ScrollTopButton /></div>
    </div>
  </footer>;
}
