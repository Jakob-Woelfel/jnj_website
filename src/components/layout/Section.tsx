import type { ReactNode } from 'react';

interface SectionProps {
  children?: ReactNode;
  bg?: string;
  pad?: string;
  id?: string;
}

export default function Section({ children, bg = 'transparent', pad = 'var(--section-y)', id }: SectionProps) {
  return (
    <section id={id} style={{ background: bg, paddingTop: pad, paddingBottom: pad }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter-lg)' }}>
        {children}
      </div>
    </section>
  );
}
