import { globalStyle } from '@vanilla-extract/css';
import { vars } from './tokens.css';
import './fonts.css';

globalStyle('*, *::before, *::after', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html', {
  margin: 0,
  padding: 0,
  fontFamily:
    '"Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans KR", sans-serif',
  color: '#111',
  fontSize: vars.font.size.md,
  lineHeight: 1.5,
  scrollBehavior: 'smooth',
  WebkitTextSizeAdjust: '100%',
  background: vars.color.bg,
});

globalStyle('body', {
  margin: 0,
  padding: 0,
  lineHeight: 1.5,
  wordBreak: 'keep-all',
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
  padding: 0,
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

globalStyle('em', {
  fontStyle: 'normal',
});
