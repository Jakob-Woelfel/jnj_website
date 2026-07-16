type LogoProps = {
  /** 'onBrand' = helle Variante für dunkle Pine-Flächen (Footer) */
  variant?: 'default' | 'onBrand';
  /** Schriftgröße von „J&J" in px — „studios" skaliert mit */
  size?: number;
};

export default function Logo({ variant = 'default', size = 30 }: LogoProps) {
  const jjColor      = variant === 'onBrand' ? '#fff' : 'var(--green-800)';
  const studiosColor = 'var(--text-on-brand-muted)';

  return (
    <span
      aria-label="J&J Studios"
      style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: `${size}px`, lineHeight: 1, letterSpacing: 'var(--ls-tight)', whiteSpace: 'nowrap' }}
    >
      <span style={{ color: jjColor }}>J&amp;J</span>
      <span style={{ color: studiosColor, fontSize: '0.72em' }}>studios</span>
    </span>
  );
}
