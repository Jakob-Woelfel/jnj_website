'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'accent' | 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  iconLeft,
  iconRight,
  disabled = false,
  type = 'button',
  onClick,
  className,
}: ButtonProps) {
  const cn = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if (href) {
    return <Link href={href} className={cn} onClick={onClick}>{content}</Link>;
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cn}>
      {content}
    </button>
  );
}
