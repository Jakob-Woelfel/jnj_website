export function Avatar({ src, name = '', size = 'md', ...rest }) {
  const sizes = { sm: 32, md: 44, lg: 64, xl: 88 };
  const px = sizes[size] || sizes.md;
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');

  return (
    <span
      {...rest}
      aria-label={name || undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: px,
        height: px,
        borderRadius: '50%',
        overflow: 'hidden',
        flex: 'none',
        background: 'var(--green-700)',
        color: 'var(--text-on-brand)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: px * 0.4,
        letterSpacing: '0.01em',
        boxShadow: 'inset 0 0 0 1px rgba(20,53,42,0.12)',
      }}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        initials || '·'
      )}
    </span>
  );
}
