import { style } from '@vanilla-extract/css';

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
