import { useState } from 'react';
import { useId } from 'react';

export function Input({ label, hint, error, id, type = 'text', required = false, leadingIcon = null, ...rest }) {
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '9px',
          background: 'var(--surface-card)',
          border: `1px solid ${error ? 'var(--danger-600)' : focus ? 'var(--border-brand)' : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius-md)',
          padding: '0 13px',
          boxShadow: focus ? 'var(--ring)' : 'none',
          transition: 'border-color .15s ease, box-shadow .15s ease',
        }}
      >
        {leadingIcon && <span style={{ color: 'var(--text-faint)', display: 'flex' }}>{leadingIcon}</span>}
        <input
          id={inputId}
          type={type}
          required={required}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            color: 'var(--text-strong)',
            padding: '11px 0',
            minWidth: 0,
          }}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: '13px', color: error ? 'var(--danger-700)' : 'var(--text-faint)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
