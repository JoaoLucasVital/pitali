import { useEffect, useRef } from 'react';
import { GlassLink } from './GlassControls';

export default function CinematicHero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let disposed = false;
    let revert: (() => void) | undefined;

    async function startMotion() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (disposed || !element) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const scene = element.querySelector<HTMLElement>('.hero-scene')!;
        const photograph = element.querySelector<HTMLElement>('.hero-photograph')!;
        const copy = element.querySelector<HTMLElement>('.hero-copy')!;
        const hint = element.querySelector<HTMLElement>('.scroll-hint')!;
        const fade = element.querySelector<HTMLElement>('.hero-fade')!;
        const caption = element.querySelector<HTMLElement>('.photo-caption')!;

        element.dataset.motion = 'on';
        const timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: element,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Invisible links must not remain keyboard targets over the photo.
              copy.inert = self.progress > 0.3;
            },
          },
        });

        timeline
          .fromTo(copy, { y: 0, opacity: 1 }, { y: -100, opacity: 0, duration: 0.3 }, 0)
          .fromTo(hint, { opacity: 1 }, { opacity: 0, duration: 0.12 }, 0)
          .fromTo(scene,
            { y: () => window.innerHeight * 1.04, scale: 0.66 },
            { y: 0, scale: 1, duration: 0.58, ease: 'power1.inOut' }, 0.06)
          .fromTo(photograph, { yPercent: 0, scale: 1.045 },
            { yPercent: -2, scale: 1.045, duration: 0.35 }, 0.6)
          .fromTo(caption, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.12 }, 0.58)
          .to(caption, { opacity: 0, duration: 0.12 }, 0.82)
          .fromTo(fade, { opacity: 0 }, { opacity: 1, duration: 0.22 }, 0.78);

        ScrollTrigger.refresh();
        return () => {
          delete element.dataset.motion;
          copy.inert = false;
        };
      }, element);

      revert = () => media.revert();
    }

    // The server-rendered page remains usable if animation cannot load.
    startMotion().catch(() => { delete element.dataset.motion; });
    return () => { disposed = true; revert?.(); };
  }, []);

  return (
    <section ref={root} id="inicio" className="cinematic-hero" aria-labelledby="hero-title">
      <div className="hero-viewport">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Beachwear &amp; fitwear</p>
          <h1 id="hero-title"><span>Vista seu</span><span>movimento.</span></h1>
          <p className="hero-description">Do seu jeito. No seu ritmo.</p>
          <GlassLink href="#fitwear">Explorar fitwear <span aria-hidden="true">↗</span></GlassLink>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span className="scroll-line" />
          <span>Um novo movimento</span>
          <span className="scroll-index">01 / 02</span>
        </div>

        <div className="hero-scene">
          <img
            className="hero-photograph"
            src="/images/pitali-hero-campanha-hq.webp"
            srcSet="/images/pitali-hero-campanha-640.webp 640w, /images/pitali-hero-campanha-960.webp 960w, /images/pitali-hero-campanha.webp 1066w, /images/pitali-hero-campanha-hq.webp 1333w"
            sizes="100vw"
            alt="Campanha Pitali na praia: duas modelos com jaquetas rosa e cinza, shorts rosa e off-white, diante de uma rede esportiva."
            width="1333"
            height="2000"
            fetchPriority="high"
            decoding="async"
          />
          <div className="photo-caption" aria-hidden="true">
            <span>PITALI</span>
            <span>Seu corpo.<br />Seu movimento.</span>
          </div>
          <div className="hero-fade" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
