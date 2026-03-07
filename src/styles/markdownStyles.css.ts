import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './tokens.css';

export const h1 = style({
  fontSize: '28px',
  fontWeight: 800,
  lineHeight: 1.2,
  margin: '24px 0 12px',
});

export const h2 = style({});
export const h3 = style({});
export const h4 = style({});
export const h5 = style({});
export const h6 = style({});

export const link = style({});
export const button = style({});
export const p = style({});
export const ul = style({});
export const li = style({});

export const quoteCard = style({
  margin: '16px 0',
  padding: '14px 16px',
  borderRadius: '14px',
  border: '1px solid rgba(255,255,255,0.12)',
  background: 'rgba(255,255,255,0.06)',
});
export const markInlineCode = style({});
export const img = style({
  opacity: 0,
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
  transition: 'opacity 200ms ease',
  selectors: {
    '&[data-loaded="true"]': { opacity: 1 },
  },
});

/** Markdown 기본 스타일(이 페이지에서만 적용) */
export const markdown = style({
  overflow: 'hidden',
  fontSize: 16,
  lineHeight: 1.75,
  wordBreak: 'break-word',
});

export const tableScroll = style({
  maxWidth: '100%',
  overflowX: 'auto',
});

globalStyle(`${markdown} h1, ${markdown} h2, ${markdown} h3`, {
  margin: `${vars.space.lg} 0 ${vars.space.sm}`,
  lineHeight: 1.3,
});

globalStyle(`${markdown} p`, {
  margin: `${vars.space.sm} 0`,
});

globalStyle(`${markdown} ul, ${markdown} ol`, {
  margin: `${vars.space.sm} 0`,
  paddingLeft: '1.2em',
});

globalStyle(`${markdown} a`, {
  color: vars.color.accent,
  textDecoration: 'underline',
  textUnderlineOffset: 3,
});

globalStyle(`${markdown} code`, {
  fontSize: '0.95em',
});

globalStyle(`${markdown} pre`, {
  padding: vars.space.md,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  overflowX: 'auto',
  background: vars.color.surface,
  margin: '1em 0',
});
globalStyle(`${markdown} :where(img, video, iframe)`, {
  maxWidth: '100%',
  height: 'auto',
});

globalStyle(`${markdown} p`, { margin: '0.75em 0' });

globalStyle(`${markdown} :where(ul, ol)`, {
  margin: '0.75em 0',
  paddingLeft: '1.25em',
});

globalStyle(`${markdown} :where(h1, h2, h3)`, {
  margin: '1.2em 0 0.6em',
});

globalStyle(`${tableScroll} table`, {
  width: '100%',
  borderCollapse: 'collapse',
});

globalStyle(`${tableScroll} :where(th, td)`, {
  padding: '0.6em 0.75em',
  border: '1px solid rgba(0,0,0,0.12)',
  verticalAlign: 'top',
});
