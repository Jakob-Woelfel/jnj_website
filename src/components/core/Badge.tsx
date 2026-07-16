import type { CSSProperties, ReactNode } from 'react';

type Variant = 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger';
type Size = 'sm' | 'md';

const palettes: Record<Variant, { bg: string; fg: string; dot: string }> = {
  neutral: { bg: 'var(--ink-100)',     fg: 'var(--ink-700)',    dot: 'var(--ink-400)' },
  brand:   { bg: 'var(--teal-100)',   fg: 'var(--teal-800)',  dot: 'var(--teal-600)' },
  accent:  { bg: 'var(--gold-100)',    fg: 'var(--gold-800)',   dot: 'var(--gold-600)' },
  success: { bg: 'var(--success-100)', fg: 'var(--success-600)',dot: 'var(--success-600)' },
  warning: { bg: 'var(--warning-100)', fg: '#7a5510',           dot: 'var(--warning-600)' },
  danger:  { bg: 'var(--danger-100)',  fg: 'var(--danger-700)', dot: 'var(--danger-600)' },
};
const sizes: Record<Size, { fontSize: string; padding: string }> = {
  sm: { fontSize: '11px',   padding: '2px 8px' },
  md: { fontSize: '12.5px', padding: '4px 11px' },
};

interface BadgeProps {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  dot?: boolean;
  style?: CSSProperties;
}

export function Badge({ children, variant = 'neutral', size = 'md', dot = false, style }: BadgeProps) {
  const p  = palettes[variant];
  const sz = sizes[size];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: sz.fontSize, lineHeight: 1.3, letterSpacing: '0.01em', padding: sz.padding, borderRadius: 'var(--radius-pill)', background: p.bg, color: p.fg, whiteSpace: 'nowrap', ...style }}>
      {dot && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: p.dot, flex: 'none' }} />}
      {children}
    </span>
  );
}
