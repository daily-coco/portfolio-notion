import { keyframes, style } from '@vanilla-extract/css';

const marqueeRight = keyframes({
  from: {
    transform: 'translate3d(0, 0, 0)',
  },
  to: {
    transform: 'translate3d(-50%, 0, 0)',
  },
});

export const marquee = style({
  overflow: 'hidden',
  width: '100%',

  maskImage:
    'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
  WebkitMaskImage:
    'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
});

export const track = style({
  display: 'flex',
  width: 'max-content',
  animation: `${marqueeRight} 250s linear infinite`,
  willChange: 'transform',

  selectors: {
    '&:hover': {
      animationPlayState: 'paused',
    },
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
      transform: 'translate3d(0, 0, 0)',
    },
  },
});

export const group = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,

  gap: 'clamp(1rem, 2vw, 2rem)',
  paddingRight: 'clamp(1rem, 2vw, 2rem)',

  margin: 0,
  listStyle: 'none',
});

export const item = style({
  flex: '0 0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '4rem',
  height: '4rem',
  borderRadius: '999px',

  background: '#fff',
  border: '1px solid rgba(0, 0, 0, 0.08)',
});

export const logo = style({
  display: 'block',
  width: '2.5rem',
  height: '2.5rem',
  objectFit: 'contain',
});

export const screenReaderOnly = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
});
