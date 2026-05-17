import { style } from '@vanilla-extract/css';

const desktop = 'screen and (min-width: 768px)';

export const tagFilterWrap = style({
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  minWidth: 0,
  overflow: 'hidden',

  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: '10px',
      width: '36px',
      pointerEvents: 'none',
      background:
        'linear-gradient(to left, var(--page-bg, #fff) 20%, rgba(255, 255, 255, 0))',
    },
  },

  '@media': {
    [desktop]: {
      overflow: 'visible',

      selectors: {
        '&::after': {
          display: 'none',
        },
      },
    },
  },
});

export const tagFilterList = style({
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '8px',

  width: '100%',
  maxWidth: '100%',
  minWidth: 0,

  margin: 0,
  padding: '0 40px 10px 0',
  listStyle: 'none',

  overflowX: 'auto',
  overflowY: 'hidden',

  scrollSnapType: 'x proximity',
  overscrollBehaviorX: 'contain',
  WebkitOverflowScrolling: 'touch',

  scrollbarWidth: 'none',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  '@media': {
    [desktop]: {
      flexWrap: 'wrap',
      overflow: 'visible',
      padding: 0,
    },
  },
});

export const tagFilterItem = style({
  flex: '0 0 auto',
  minWidth: 0,
  scrollSnapAlign: 'start',
});

export const tagButton = style({
  flexShrink: 0,
  paddingInline: '0.75rem',
  fontSize: '0.75rem',
  borderRadius: '1.0rem',
  color: '#734e2a',
  background: '#E4d4c6',
  whiteSpace: 'nowrap',
});
