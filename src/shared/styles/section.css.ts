import { style } from '@vanilla-extract/css';

export const sectionBase = style({
  scrollMarginTop: '96px',
  padding: '50px 0',
  '@media': {
    'screen and (max-width:1023px)': {
      padding: '50px 25px',
    },
  },
});

export const sectionInner = style({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
});
