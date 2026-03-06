import { globalStyle } from '@vanilla-extract/css';
import { vars } from './tokens.css';

globalStyle('*, *::before, *::after', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
  margin: 0,
  background: vars.color.bg,
  fontFamily: 'system-ui, -apple-system, sans-serif',
  fontSize: vars.font.size.md,
  lineHeight: 1.5,
});

globalStyle('body', {
  margin: 0,
  lineHeight: 1.5,
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('button, input, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  margin: 0,
});

globalStyle('ul, ol, li', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});
