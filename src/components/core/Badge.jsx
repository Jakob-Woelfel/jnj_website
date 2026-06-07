export function Badge({ children, variant = 'neutral', size = 'md', dot = false, ...rest }) {
  const palettes = {
    neutral: { bg: 'var(--ink-100)',     fg: 'var(--ink-700)',   dot: 'var(--ink-400)' },
    brand:   { bg: 'var(--green-100)',   fg: 'var(--green-800)', dot: 'var(--green-600)' },
    accent:  { bg: 'var(--gold-100)',    fg: 'var(--gold-800)',  dot: 'var(--gold-600)' },
    success: { bg: 'var(--success-100)', fg: 'var(--success-600)', dot: 'var(--success-600)' },
    warning: { bg: 'var(--warning-100)', fg: '#7a5510',          dot: 'var(--warning-600)' },
    danger:  { bg: 'var(--danger-100)',  fg: 'var(--danger-700)', dot: 'var(--danger-600)' },
  };
  const sizes = {
    sm: { fontSize: '11px',   padding: '2px 8px' },
    md: { fontSize: '12.5px', padding: '4px 11px' },
  };
  const p  = palettes[variant] || palettes.neutral;
  const sz = sizes[size] || sizes.md;

  return (
    <span
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: sz.fontSize,
        lineHeight: 1.3,
        letterSpacing: '0.01em',
        padding: sz.padding,
        borderRadius: 'var(--radius-pill)',
        background: p.bg,
        color: p.fg,
        whiteSpace: 'nowrap',
      }}
    >
      {dot && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: p.dot, flex: 'none' }} />}
      {children}
    </span>
  );
}
