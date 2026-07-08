import { useEffect, useRef, useState } from 'react';

/*
  Fades content up as it enters the viewport. Fires once.
  Respects prefers-reduced-motion (content shown immediately).
*/
export default function Reveal({ children, delay = 0, y = 26 }) {
  const ref = useRef(null);
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
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
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
