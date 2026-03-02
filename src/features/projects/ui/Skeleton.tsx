type Props = {
  height?: number;
  width?: number | string;
  radius?: number;
};

export default function Skeleton({
  height = 14,
  width = '100%',
  radius = 8,
}: Props) {
  return (
    <div
      style={{
        height,
        width,
        borderRadius: radius,
        background: '#eee',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: 'translateX(-100%)',
          background:
            'linear-gradient(90deg, rgba(238,238,238,0) 0%, rgba(255,255,255,0.8) 50%, rgba(238,238,238,0) 100%)',
          animation: 'shimmer 1.2s infinite',
        }}
      />
      <style>
        {`@keyframes shimmer {
          100% { transform: translateX(100%); }
        }`}
      </style>
    </div>
  );
}
