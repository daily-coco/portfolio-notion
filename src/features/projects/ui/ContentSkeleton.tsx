type Props = { lines?: number };

export default function ContentSkeleton({ lines = 10 }: Props) {
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 14,
            borderRadius: 8,
            opacity: 0.6,
            background: 'rgba(0,0,0,0.08)',
          }}
        />
      ))}
      <div
        style={{
          height: 220,
          borderRadius: 12,
          opacity: 0.5,
          background: 'rgba(0,0,0,0.06)',
          marginTop: 8,
        }}
      />
    </div>
  );
}
