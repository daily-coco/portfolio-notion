import { keyframes, style } from '@vanilla-extract/css';

const shimmer = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '100%': {
    transform: 'translateX(100%)',
  },
});

export const root = style({
  position: 'relative',
  overflow: 'hidden',
  display: 'block',
  background: '#eee',
});

export const shimmerLayer = style({
  position: 'absolute',
  inset: 0,
  transform: 'translateX(-100%)',
  background:
    'linear-gradient(90deg, rgba(238,238,238,0) 0%, rgba(255,255,255,0.8) 50%, rgba(238,238,238,0) 100%)',
  animation: `${shimmer} 1.2s infinite`,
});
