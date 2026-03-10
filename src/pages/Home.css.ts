import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('html', {
  scrollBehavior: 'smooth',
});

export const section = style({
  scrollMarginTop: '88px',
});
