import type { CSSProperties, ElementType, ReactNode } from 'react';
import styles from './Card.module.css';

type Tone    = 'white' | 'cream' | 'brand' | 'soft';
type Padding = 'none' | 'sm' | 'md' | 'lg';

const padClass: Record<Padding, string> = {
  none: styles.padNone,
  sm:   styles.padSm,
  md:   styles.padMd,
  lg:   styles.padLg,
};

interface CardProps {
  children?: ReactNode;
  padding?: Padding;
  interactive?: boolean;
  tone?: Tone;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
}

export function Card({
  children,
  padding = 'md',
  interactive = false,
  tone = 'white',
  as: Tag = 'div',
  style,
  className,
}: CardProps) {
  const cn = [
    styles.card,
    tone !== 'white' ? styles[tone] : '',
    padClass[padding],
    interactive ? styles.interactive : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return <Tag className={cn} style={style}>{children}</Tag>;
}
