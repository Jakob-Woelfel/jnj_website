export default function SectionHeading({ eyebrow, title, lead, align = 'center', maxWidth = '34ch' }) {
  return (
    <div
      style={{
        textAlign: align,
        marginInline: align === 'center' ? 'auto' : 0,
        maxWidth: align === 'center' ? '44ch' : 'none',
        marginBottom: 'var(--space-12)',
      }}
    >
      {eyebrow && <div className="jj-eyebrow" style={{ marginBottom: '14px' }}>{eyebrow}</div>}
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(28px, 4vw, 40px)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: 'var(--text-strong)',
          margin: 0,
        }}
      >
        {title}
      </h2>
      {lead && (
        <p
          style={{
            marginTop: '16px',
            fontSize: '19px',
            lineHeight: 1.6,
            color: 'var(--text-muted)',
            maxWidth,
            marginInline: align === 'center' ? 'auto' : 0,
          }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
