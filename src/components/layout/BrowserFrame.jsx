export default function BrowserFrame({ children, url = 'ihrewebsite.de', style }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border-default)',
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '12px 16px',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--paper-2)',
        }}
      >
        <span style={{ display: 'flex', gap: '6px' }}>
          <i style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#E0A6A6' }} />
          <i style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EAD09A' }} />
          <i style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#A9D3B6' }} />
        </span>
        <span
          style={{
            marginLeft: '8px', flex: 1,
            background: 'var(--surface-sunken)',
            borderRadius: 'var(--radius-pill)',
            padding: '5px 14px',
            fontSize: '12.5px', color: 'var(--text-faint)',
            fontFamily: 'var(--font-sans)', textAlign: 'center',
          }}
        >
          {url}
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}
