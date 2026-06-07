import { useState } from 'react';

export function Accordion({ items = [], allowMultiple = false, defaultOpen = [] }) {
  const [open, setOpen] = useState(new Set(defaultOpen));

  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)', borderTop: '1px solid var(--border-default)' }}>
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--border-default)' }}>
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: '16px', padding: '20px 4px', background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left', fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 600,
                color: 'var(--text-strong)',
              }}
            >
              <span>{item.q}</span>
              <span style={{
                flex: 'none', width: '26px', height: '26px', borderRadius: '50%',
                background: isOpen ? 'var(--green-600)' : 'var(--green-50)',
                color: isOpen ? '#fff' : 'var(--green-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background .15s ease, transform .2s ease',
                transform: isOpen ? 'rotate(45deg)' : 'none',
                fontSize: '20px', lineHeight: 1,
              }}>+</span>
            </button>
            <div style={{
              maxHeight: isOpen ? '400px' : '0',
              overflow: 'hidden',
              transition: 'max-height .25s ease, opacity .2s ease',
              opacity: isOpen ? 1 : 0,
            }}>
              <p style={{ margin: 0, padding: '0 4px 22px', color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6, maxWidth: '62ch' }}>
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
