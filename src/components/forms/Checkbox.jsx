import { useId } from 'react';

export function Checkbox({ label, checked, defaultChecked, id, ...rest }) {
  const reactId = useId();
  const inputId = id || reactId;

  return (
    <label
      htmlFor={inputId}
      style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.45 }}
    >
      <span style={{ position: 'relative', display: 'inline-flex', flex: 'none', marginTop: '1px' }}>
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          {...rest}
          style={{ position: 'absolute', opacity: 0, width: '20px', height: '20px', margin: 0, cursor: 'pointer' }}
        />
        <span
          className="jj-checkbox-box"
          style={{
            width: '20px', height: '20px', borderRadius: 'var(--radius-sm)',
            border: '1.5px solid var(--border-strong)', background: 'var(--surface-card)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .12s ease, border-color .12s ease',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="jj-checkbox-tick" style={{ opacity: 0 }}>
            <path d="M2.5 6.2l2.3 2.3L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <style>{`
          input:checked + .jj-checkbox-box { background: var(--green-600); border-color: var(--green-600); }
          input:checked + .jj-checkbox-box .jj-checkbox-tick { opacity: 1; }
          input:focus-visible + .jj-checkbox-box { box-shadow: var(--ring); }
        `}</style>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
