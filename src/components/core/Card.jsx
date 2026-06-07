import { useState } from 'react';

export function Card({
  children,
  padding = 'md',
  interactive = false,
  tone = 'white',
  as: Tag = 'div',
  style: extraStyle,
  ...rest
}) {
  const pads = { none: '0', sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' };
  const tones = {
    white: { background: 'var(--surface-card)',       color: 'var(--text-body)' },
    cream: { background: 'var(--surface-card-cream)', color: 'var(--text-body)' },
    brand: { background: 'var(--surface-brand)',      color: 'var(--text-on-brand)' },
    soft:  { background: 'var(--surface-brand-soft)', color: 'var(--text-body)' },
  };
  const t = tones[tone] || tones.white;
  const [hover, setHover] = useState(false);

  return (
    <Tag
      {...rest}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: t.background,
        color: t.color,
        border: tone === 'brand' ? '1px solid transparent' : '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        padding: pads[padding] ?? pads.md,
        boxShadow: interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: interactive && hover ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow .2s ease, transform .2s ease',
        cursor: interactive ? 'pointer' : 'default',
        ...extraStyle,
      }}
    >
      {children}
    </Tag>
  );
}
