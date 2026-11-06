import { useEffect, useRef } from 'react';

const chapters = [
  { title: 'PITALI', label: 'Sol e movimento', text: 'Do primeiro raio de sol\nao seu próximo movimento.', note: 'Um universo.\nTodas as suas versões.' },
  { title: 'BEACHWEAR', label: 'Sinta o sol', text: 'Dias leves.\nHorizontes abertos.', note: 'O mar convida.\nVocê segue seu ritmo.' },
  { title: 'FITWEAR', label: 'Encontre seu ritmo', text: 'Presença em cada gesto.\nLiberdade para se mover.', note: 'Seu tempo.\nSua energia.' },
];

export default function HorizonHero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    async function animate() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (disposed || !element) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        element.dataset.motion = 'on';
        const panels = element.querySelectorAll<HTMLElement>('.hz-chapter');
        const progress = element.querySelector<HTMLElement>('.hz-progress-fill');
        const number = element.querySelector<HTMLElement>('.hz-current');
        const mobile = window.matchMedia('(max-width: 767px)').matches;
        const timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: element, start: 'top top', end: 'bottom bottom', scrub: true,
            invalidateOnRefresh: true,
            onUpdate: ({ progress: value }) => {
              if (progress) progress.style.transform = `scaleX(${value})`;
              const active = value < 0.31 ? 0 : value < 0.65 ? 1 : 2;
              if (number) number.textContent = `0${active + 1}`;
            },
          },
        });

        gsap.set(panels, { opacity: 0, y: 50, scale: 0.94 });
        gsap.set(panels[0], { opacity: 1, y: 0, scale: 1 });
        timeline
          .to(panels[0], { opacity: 0, y: -70, scale: 1.1, duration: 0.13 }, 0.18)
          .to(panels[1], { opacity: 1, y: 0, scale: 1, duration: 0.13 }, 0.29)
          .to(panels[1], { opacity: 0, y: -70, scale: 1.1, duration: 0.13 }, 0.52)
          .to(panels[2], { opacity: 1, y: 0, scale: 1, duration: 0.13 }, 0.64)
          .to(panels[2], { opacity: 0, y: -40, duration: 0.1 }, 0.9)
          .fromTo('.hz-dunes', { scale: 1, xPercent: 0, yPercent: 0 },
            { scale: 1.65, xPercent: -13, yPercent: 12, duration: 1 }, 0)
          .fromTo('.hz-sun', { yPercent: 0, scale: 1 },
            { yPercent: -35, scale: 0.8, duration: 1 }, 0)
          .fromTo('.hz-grid', { yPercent: 0 }, { yPercent: 34, duration: 1 }, 0)
          .fromTo('.hz-board', { xPercent: 0, yPercent: 0, rotation: -22, scale: 0.8 },
            { xPercent: mobile ? 75 : 160, yPercent: 70, rotation: -7, scale: 2.5, opacity: 0, duration: 0.5 }, 0)
          .fromTo('.hz-ring', { xPercent: 0, yPercent: 0, rotation: -20, scale: 0.85 },
            { xPercent: -140, yPercent: 170, rotation: 45, scale: 2.8, opacity: 0, duration: 0.49 }, 0)
          .fromTo('.hz-ball', { xPercent: 0, yPercent: 0, scale: 0.45, opacity: 0.3 },
            { xPercent: -105, yPercent: 210, scale: 2.2, opacity: 1, duration: 0.45 }, 0.12)
          .to('.hz-ball', { opacity: 0, duration: 0.08 }, 0.53)
          .fromTo('.hz-ribbon', { xPercent: 0, rotation: -20, scale: 0.6, opacity: 0 },
            { xPercent: 60, rotation: 15, scale: 1.5, opacity: 1, duration: 0.3 }, 0.2)
          .to('.hz-ribbon', { xPercent: 180, yPercent: 80, scale: 2.4, opacity: 0, duration: 0.22 }, 0.5)
          .fromTo('.hz-dumbbell', { xPercent: -40, yPercent: -20, scale: 0.5, rotation: -25, opacity: 0 },
            { xPercent: 0, yPercent: 0, scale: 1, rotation: -15, opacity: 1, duration: 0.2 }, 0.52)
          .to('.hz-dumbbell', { xPercent: 110, yPercent: 90, scale: 1.8, rotation: 8, duration: 0.28 }, 0.72)
          .fromTo('.hz-mat', { xPercent: 30, yPercent: -20, scale: 0.5, rotation: 28, opacity: 0 },
            { xPercent: 0, yPercent: 0, scale: 1, rotation: 18, opacity: 1, duration: 0.2 }, 0.5)
          .to('.hz-mat', { xPercent: -70, yPercent: 65, scale: 1.6, rotation: 2, duration: 0.3 }, 0.7)
          .fromTo('.hz-finish-fade', { opacity: 0 }, { opacity: 1, duration: 0.14 }, 0.86);

        ScrollTrigger.refresh();
        return () => { delete element.dataset.motion; };
      }, element);
      cleanup = () => media.revert();
    }
    animate().catch(() => { delete element.dataset.motion; });
    return () => { disposed = true; cleanup?.(); };
  }, []);

  return (
    <section ref={root} className="hz-experience" aria-label="Pitali, uma jornada entre praia e movimento">
      <div className="hz-viewport">
        <div className="hz-environment" aria-hidden="true">
          <div className="hz-sun" />
          <div className="hz-horizon" />
          <div className="hz-grid" />
          <svg className="hz-dunes" viewBox="0 0 1600 700" preserveAspectRatio="none">
            <path d="M0 310 230 215 480 300 710 160 1040 245 1330 185 1600 300V700H0Z" fill="#e9dfc8" />
            <path d="M0 310 230 215 480 300 260 440Z" fill="#f3ecdc" />
            <path d="m480 300 230-140 330 85-190 215Z" fill="#eee6d3" />
            <path d="m1040 245 290-60 270 115-295 160Z" fill="#e0d2b4" />
            <path d="M0 490 260 440 480 300 850 460 1305 460 1600 360V700H0Z" fill="#d9c6a0" />
            <path d="m0 490 260-50 190 260H0Z" fill="#e4d6b8" />
            <path d="m260 440 220-140 370 160-400 240Z" fill="#eaddc1" />
            <path d="m850 460 455 0 295-100-180 340H450Z" fill="#c9b184" />
            <path d="m1305 460 295-100v340h-180Z" fill="#dbc8a0" />
            <path d="m0 650 450-95 385 145H0Z" fill="#c4ab7e" />
          </svg>
          <div className="hz-orbit hz-orbit-one" /><div className="hz-orbit hz-orbit-two" />
        </div>

        <div className="hz-chapters">
          {chapters.map((chapter, index) => (
            <article className={`hz-chapter hz-chapter-${index}`} key={chapter.title}>
              <p className="hz-kicker">{chapter.label}</p>
              {index === 0 ? <h1>{chapter.title}</h1> : <h2>{chapter.title}</h2>}
              <div className="hz-chapter-details"><p>{chapter.text}</p><p>{chapter.note}</p></div>
            </article>
          ))}
        </div>

        <div className="hz-objects" aria-hidden="true">
          <div className="hz-prop hz-board"><div className="hz-board-body"><span /></div><div className="hz-board-fin" /></div>
          <div className="hz-prop hz-ring"><div className="hz-ring-body" /></div>
          <div className="hz-prop hz-ball"><div /></div>
          <div className="hz-prop hz-ribbon"><div /></div>
          <div className="hz-prop hz-dumbbell"><div className="hz-weight hz-weight-left" /><div className="hz-bar" /><div className="hz-weight hz-weight-right" /></div>
          <div className="hz-prop hz-mat"><div className="hz-mat-surface" /><div className="hz-mat-roll" /></div>
        </div>
        <div className="hz-finish-fade" aria-hidden="true" />
        <div className="hz-scroll-ui" aria-hidden="true"><span>Explore com o scroll <b>↓</b></span><div className="hz-progress"><i className="hz-progress-fill" /></div><span><b className="hz-current">01</b><span className="hz-total"> / 03</span></span></div>
      </div>
    </section>
  );
}
