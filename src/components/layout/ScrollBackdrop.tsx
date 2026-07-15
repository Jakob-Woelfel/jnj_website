'use client';

import { useEffect, useRef, type CSSProperties } from 'react';

/*
  Fixed background layer for the Startseite.
  - Background colour drifts through warm cream → soft green as you scroll.
  - Large organic shapes move at different speeds (parallax).
  - Subtle grain texture on top.
  Respects prefers-reduced-motion: shapes stay static, colour set once.
*/

const STOPS: Array<[number, [number, number, number]]> = [
  [0.0,  [250, 243, 229]], // warm cream, gold-tinted
  [0.16, [252, 241, 218]], // --gold-100 (warm moment)
  [0.38, [244, 238, 219]], // cream drifting green
  [0.58, [222, 235, 228]], // --green-100
  [0.82, [194, 218, 206]], // --green-200 (deepest moment)
  [1.0,  [222, 235, 228]], // ease back before the footer
];

const SHAPE_SPEEDS = [-0.12, 0.07, -0.05];

// Zum Vergleichen der Varianten im Browser umschalten:
const SHOW_SOFT_SHAPES = true;   // Farbverläufe + gestrichelter Ring
const SHOW_AMP_PATTERN = true;   // &-Karomuster

const AMP_TILE = 48;       // Kachelgröße in px
const AMP_FONT = 16;       // Glyphengröße in px
const AMP_OPACITY = 0.16;  // Gesamtdeckkraft der Muster-Ebene
const AMP_SPEED = 0.06;    // Parallax-Faktor des Musters

function colorAt(t: number): string {
  let i = 1;
  while (i < STOPS.length - 1 && STOPS[i][0] < t) i++;
  const [t0, c0] = STOPS[i - 1];
  const [t1, c1] = STOPS[i];
  const f = Math.min(1, Math.max(0, (t - t0) / (t1 - t0)));
  const mix = c0.map((v, k) => Math.round(v + (c1[k] - v) * f));
  return `rgb(${mix[0]}, ${mix[1]}, ${mix[2]})`;
}

const GRAIN =
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`;

const shapeBase: CSSProperties = {
  position: 'absolute',
  borderRadius: '50%',
  willChange: 'transform',
};

export default function ScrollBackdrop() {
  const bgRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<Array<HTMLElement | SVGSVGElement | null>>([]);
  const ampRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const t = Math.min(1, window.scrollY / max);
      if (bgRef.current) bgRef.current.style.backgroundColor = colorAt(t);
      if (!reduced) {
        shapeRefs.current.forEach((el, i) => {
          if (el) el.style.transform = `translate3d(0, ${window.scrollY * SHAPE_SPEEDS[i]}px, 0)`;
        });
        if (ampRef.current) {
          // Muster wiederholt sich alle AMP_TILE px — Verschiebung modulo Kachelhöhe
          // reicht, dafür genügt der eine Kachel-Überstand oben.
          const y = ((window.scrollY * AMP_SPEED) % AMP_TILE + AMP_TILE) % AMP_TILE;
          ampRef.current.style.transform = `translate3d(0, ${-y}px, 0)`;
        }
      }
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      aria-hidden
      style={{
        position: 'fixed', inset: 0, zIndex: -1,
        overflow: 'hidden',
        backgroundColor: 'var(--surface-page)',
        pointerEvents: 'none',
      }}
    >
      {/* &-Karomuster — zwei um eine halbe Kachel versetzte Glyphen ergeben das Karo */}
      {SHOW_AMP_PATTERN && (
        <svg
          ref={(el) => { ampRef.current = el; }}
          style={{
            position: 'absolute',
            top: -AMP_TILE, left: 0,
            width: '100%',
            height: `calc(100% + ${AMP_TILE}px)`,
            opacity: AMP_OPACITY,
            willChange: 'transform',
          }}
        >
          <defs>
            <pattern id="jj-amp" width={AMP_TILE} height={AMP_TILE} patternUnits="userSpaceOnUse">
              <text
                x={AMP_TILE * 0.25} y={AMP_TILE * 0.25}
                textAnchor="middle" dominantBaseline="central"
                fontFamily="var(--font-serif)" fontStyle="italic" fontWeight={500}
                fontSize={AMP_FONT} fill="var(--green-300)"
              >&amp;</text>
              <text
                x={AMP_TILE * 0.75} y={AMP_TILE * 0.75}
                textAnchor="middle" dominantBaseline="central"
                fontFamily="var(--font-serif)" fontStyle="italic" fontWeight={500}
                fontSize={AMP_FONT} fill="var(--green-300)"
              >&amp;</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jj-amp)" />
        </svg>
      )}
      {SHOW_SOFT_SHAPES && (
        <>
          {/* Soft green orb, upper right */}
          <div
            ref={(el) => { shapeRefs.current[0] = el; }}
            style={{
              ...shapeBase,
              top: '-22vh', right: '-18vw',
              width: '58vw', height: '58vw',
              background: 'radial-gradient(circle, rgba(143, 191, 171, 0.4) 0%, rgba(143, 191, 171, 0) 65%)',
            }}
          />
          {/* Warm gold glow, left middle */}
          <div
            ref={(el) => { shapeRefs.current[1] = el; }}
            style={{
              ...shapeBase,
              top: '48vh', left: '-20vw',
              width: '52vw', height: '52vw',
              background: 'radial-gradient(circle, rgba(239, 195, 110, 0.42) 0%, rgba(239, 195, 110, 0) 62%)',
            }}
          />
          {/* Dashed ring, lower right */}
          <svg
            ref={(el) => { shapeRefs.current[2] = el; }}
            width="640" height="640" viewBox="0 0 640 640"
            style={{ position: 'absolute', bottom: '-18vh', right: '-160px', opacity: 0.5, willChange: 'transform' }}
          >
            <circle cx="320" cy="320" r="300" fill="none" stroke="var(--green-300)" strokeWidth="1.5" strokeDasharray="3 8" />
          </svg>
        </>
      )}
      {/* Grain */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN, opacity: 0.05, mixBlendMode: 'multiply' }} />
    </div>
  );
}
