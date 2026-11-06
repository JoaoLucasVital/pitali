import { useEffect, useRef } from 'react';
import { GlassLink } from './GlassControls';
import '../styles/parallax-hero.css';

export default function ParallaxHero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    let disposed = false;
    let revert: (() => void) | undefined;
    async function start() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (disposed || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const el = root.current!;
        gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true, invalidateOnRefresh: true } })
          .fromTo(el.querySelector('.parallax-background'), { yPercent: -8 }, { yPercent: 12 }, 0)
          // Keep the lower edge of the source cutout below the scene throughout scroll.
          .fromTo(el.querySelector('.parallax-models'), { y: 0 }, { y: () => -Math.min(window.innerHeight * .08, (el.querySelector<HTMLElement>('.parallax-models')?.clientHeight ?? 0) * .18) }, 0)
          .fromTo(el.querySelector('.parallax-title'), { yPercent: 0 }, { yPercent: -110 }, 0);
      }, root.current);
      revert = () => media.revert();
    }
    start().catch(() => {});
    return () => { disposed = true; revert?.(); };
  }, []);
  return <section ref={root} className="parallax-hero" id="inicio" aria-labelledby="hero-title">
    <div className="parallax-scene">
      <img className="parallax-background" src="/images/pitali-praia-fundo.webp" alt="" width="1536" height="1024" fetchPriority="high" />
      <div className="parallax-tint" aria-hidden="true" />
      <div className="parallax-title"><h1 id="hero-title">Pitali · Beachwear &amp; fitwear</h1></div>
      <img className="parallax-models" src="/images/pitali-look-praia.webp" alt="Campanha Pitali: modelos com jaquetas rosa e cinza e shorts rosa e off-white." width="1024" height="1536" fetchPriority="high" />
      <div className="parallax-bottom"><div><span className="eyebrow">Do seu jeito. No seu ritmo.</span><p>Vista a liberdade de ser você.</p></div><GlassLink href="#looks">Explore os looks <span aria-hidden="true">↗</span></GlassLink></div>
      <span className="parallax-scroll" aria-hidden="true">Deslize para sentir o movimento ↓</span>
    </div>
  </section>;
}
