'use client';

import { useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Checkbox({ label, id, ...rest }: CheckboxProps) {
  const reactId = useId();
  const inputId = id ?? reactId;

  return (
    <label htmlFor={inputId} className={styles.label}>
      <span className={styles.wrap}>
        <input id={inputId} type="checkbox" className={styles.input} {...rest} />
        <span className={styles.box}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={styles.tick}>
            <path d="M2.5 6.2l2.3 2.3L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
