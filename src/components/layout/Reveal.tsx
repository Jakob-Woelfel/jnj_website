'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/*
  Fades content up as it enters the viewport, and back down when it leaves.
  Respects prefers-reduced-motion (content shown immediately).
*/

interface RevealProps {
  children?: ReactNode;
  delay?: number;
  y?: number;
}

export default function Reveal({ children, delay = 0, y = 26 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setShown(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : `translateY(${y}px)`,
        transition: `opacity .7s ease ${delay}ms, transform .8s cubic-bezier(.22, 1, .36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
