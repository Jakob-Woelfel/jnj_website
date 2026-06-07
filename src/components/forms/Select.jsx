import { useState, useId } from 'react';

export function Select({ label, hint, error, id, options = [], placeholder, required = false, children, ...rest }) {
  const reactId = useId();
  const inputId = id || reactId;
  const [focus, setFocus] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-sans)' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-strong)' }}>
          {label}
          {required && <span style={{ color: 'var(--danger-600)', marginLeft: '3px' }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex' }}>
        <select
          id={inputId}
          required={required}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
          style={{
            appearance: 'none',
            width: '100%',
            background: 'var(--surface-card)',
            border: `1px solid ${error ? 'var(--danger-600)' : focus ? 'var(--border-brand)' : 'var(--border-strong)'}`,
            borderRadius: 'var(--radius-md)',
            padding: '12px 40px 12px 13px',
            boxShadow: focus ? 'var(--ring)' : 'none',
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            color: 'var(--text-strong)',
            outline: 'none',
            cursor: 'pointer',
            transition: 'border-color .15s ease, box-shadow .15s ease',
          }}
        >
          {placeholder && <option value="" disabled hidden>{placeholder}</option>}
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lbl}</option>;
          })}
          {children}
        </select>
        <span style={{ position: 'absolute', right: '13px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {(hint || error) && (
        <span style={{ fontSize: '13px', color: error ? 'var(--danger-700)' : 'var(--text-faint)' }}>{error || hint}</span>
      )}
    </div>
  );
}
