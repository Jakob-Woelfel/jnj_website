import Icon from '@/components/Icon';

interface StarsProps {
  n?: number;
  size?: number;
}

export default function Stars({ n = 5, size = 18 }: StarsProps) {
  return (
    <span style={{ display: 'inline-flex', gap: '2px', color: 'var(--gold-600)' }}>
      {Array.from({ length: n }).map((_, i) => (
        <Icon key={i} name="star" size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}
