export function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  ...rest
}) {
  const sizes = {
    sm: { fontSize: '14px', padding: '8px 14px', radius: 'var(--radius-md)', gap: '7px' },
    md: { fontSize: '15px', padding: '11px 20px', radius: 'var(--radius-md)', gap: '8px' },
    lg: { fontSize: '17px', padding: '15px 28px', radius: 'var(--radius-lg)', gap: '10px' },
  };

  const variants = {
    accent: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    primary: {
      background: 'var(--green-800)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)',
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--green-800)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--green-700)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
  };

  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  const style = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1.1,
    padding: s.padding,
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background .15s ease, box-shadow .15s ease, transform .05s ease',
    ...v,
  };

  const onEnter = (e) => {
    if (disabled) return;
    if (variant === 'accent') e.currentTarget.style.background = 'var(--accent-hover)';
    else if (variant === 'primary') e.currentTarget.style.background = 'var(--green-900)';
    else if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-sunken)';
    else e.currentTarget.style.background = 'var(--green-50)';
  };
  const onLeave = (e) => { if (!disabled) e.currentTarget.style.background = v.background; };
  const onDown  = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px)'; };
  const onUp    = (e) => { e.currentTarget.style.transform = 'none'; };

  const tagProps = Tag === 'button' ? { type, disabled } : Tag === 'a' ? { href } : {};

  return (
    <Tag
      {...tagProps}
      {...rest}
      style={style}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
