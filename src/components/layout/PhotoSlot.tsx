import type { CSSProperties } from 'react';
import Icon from '@/components/Icon';

type Tone = 'green' | 'gold' | 'cream';

const tones: Record<Tone, { bg: string; fg: string }> = {
  green: { bg: 'linear-gradient(140deg, var(--green-100), var(--green-200))', fg: 'var(--green-700)' },
  gold:  { bg: 'linear-gradient(140deg, var(--gold-100), var(--gold-200))',   fg: 'var(--gold-800)' },
  cream: { bg: 'var(--surface-sunken)', fg: 'var(--text-faint)' },
};

interface PhotoSlotProps {
  label?: string;
  icon?: string;
  ratio?: string;
  tone?: Tone;
  radius?: string;
  style?: CSSProperties;
}

export default function PhotoSlot({ label = 'Foto', icon = 'sparkles', ratio = '4 / 3', tone = 'green', radius = 'var(--radius-lg)', style }: PhotoSlotProps) {
  const t = tones[tone];
  return (
    <div style={{ aspectRatio: ratio, width: '100%', background: t.bg, borderRadius: radius, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', color: t.fg, ...style }}>
      <Icon name={icon} size={30} strokeWidth={1.6} />
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        {label}
      </span>
    </div>
  );
}
