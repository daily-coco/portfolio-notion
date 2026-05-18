import { style } from '@vanilla-extract/css';
//Home
export const mainWrap = style({});

export const sectionBase = style({
  overflow: 'hidden',
  position: 'relative',
  scrollMarginTop: '88px',
  padding: '50px 25px',
  '@media': {
    'screen and (max-width:767px)': {
      padding: '50px 1rem',
    },
  },
});

export const sectionInner = style({
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
});

export const heroVisual = style({
  background: '#FAF9F7',
});
