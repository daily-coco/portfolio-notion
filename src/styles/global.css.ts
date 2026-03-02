import { globalStyle } from '@vanilla-extract/css';
import { vars } from './tokens.css';

globalStyle('body', {
  margin: 0,
  background: vars.color.bg,
  fontFamily: 'system-ui, -apple-system, sans-serif',
  fontSize: vars.font.size.md,
  lineHeight: 1.5,
});

globalStyle('*', {
  boxSizing: 'border-box',
});
