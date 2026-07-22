'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';

/*
  Sanftes, nachschwingendes Scrollen statt 1:1-nativem Scroll.
  duration / easing / lerp sind die drei Regler für mehr/weniger Nachschwingen.
  Läuft auf nativem Scroll (kein Overflow-Wrapper) — window.scrollY und native
  scroll-Events bleiben korrekt, Nav.tsx braucht keine Anpassung.
  Respektiert prefers-reduced-motion (dann bleibt Scroll komplett nativ).
*/

const LENIS_CONFIG = {
  duration: 0.9,
  easing: (t: number) => 1 - Math.pow(1 - t, 3),
  lerp: 0.12,
  wheelMultiplier: 1,
  touchMultiplier: 1,
  smoothWheel: true,
  syncTouch: false,
  anchors: false,
};

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    const start = () => {
      lenis = new Lenis(LENIS_CONFIG);
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    const stop = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = null;
      rafId = null;
    };

    if (!mql.matches) start();

    const onChange = () => {
      stop();
      if (!mql.matches) start();
    };
    mql.addEventListener('change', onChange);

    return () => {
      mql.removeEventListener('change', onChange);
      stop();
    };
  }, []);

  return <>{children}</>;
}
