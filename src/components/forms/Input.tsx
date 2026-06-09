'use client';

import { useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leadingIcon?: ReactNode;
}

export function Input({ label, hint, error, id, leadingIcon, required, ...rest }: InputProps) {
  const reactId = useId();
  const inputId = id ?? reactId;

  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={`${styles.wrapper} ${error ? styles.wrapperError : ''}`}>
        {leadingIcon && <span style={{ color: 'var(--text-faint)', display: 'flex' }}>{leadingIcon}</span>}
        <input id={inputId} required={required} className={styles.input} {...rest} />
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
      {!error && hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}
