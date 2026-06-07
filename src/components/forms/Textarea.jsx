import { useState, useId } from 'react';

export function Textarea({ label, hint, error, id, rows = 4, required = false, ...rest }) {
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
      <textarea
        id={inputId}
        rows={rows}
        required={required}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...rest}
        style={{
          width: '100%',
          resize: 'vertical',
          background: 'var(--surface-card)',
          border: `1px solid ${error ? 'var(--danger-600)' : focus ? 'var(--border-brand)' : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius-md)',
          padding: '12px 13px',
          boxShadow: focus ? 'var(--ring)' : 'none',
          fontFamily: 'var(--font-sans)',
          fontSize: '15px',
          lineHeight: 1.55,
          color: 'var(--text-strong)',
          outline: 'none',
          transition: 'border-color .15s ease, box-shadow .15s ease',
          boxSizing: 'border-box',
        }}
      />
      {(hint || error) && (
        <span style={{ fontSize: '13px', color: error ? 'var(--danger-700)' : 'var(--text-faint)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
