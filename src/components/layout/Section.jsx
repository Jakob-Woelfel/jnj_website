export default function Section({ children, bg = 'transparent', pad = 'var(--section-y)', id }) {
  return (
    <section id={id} style={{ background: bg, paddingTop: pad, paddingBottom: pad }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter-lg)' }}>
        {children}
      </div>
    </section>
  );
}
