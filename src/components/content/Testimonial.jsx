import { Avatar } from '@/components/core/Avatar';

export function Testimonial({ quote, name, business, photo, rating = 0, featured = false }) {
  return (
    <figure
      style={{
        margin: 0,
        background: featured ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        padding: featured ? 'var(--space-8)' : 'var(--space-6)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-5)',
        height: '100%', boxSizing: 'border-box',
      }}
    >
      {rating > 0 && (
        <div aria-label={`${rating} von 5`} style={{ display: 'flex', gap: '2px', color: 'var(--gold-600)' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="17" height="17" viewBox="0 0 20 20" fill={i < rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.4">
              <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.95 2.6.94-5.5-4-3.9 5.53-.8z" strokeLinejoin="round" />
            </svg>
          ))}
        </div>
      )}
      <blockquote
        style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: featured ? '24px' : '19px',
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
          color: 'var(--text-strong)',
        }}
      >
        "{quote}"
      </blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
        <Avatar name={name} src={photo} size={featured ? 'lg' : 'md'} />
        <span style={{ display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)' }}>
          <span style={{ fontWeight: 600, fontSize: '15px', color: 'var(--text-strong)' }}>{name}</span>
          {business && <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{business}</span>}
        </span>
      </figcaption>
    </figure>
  );
}
