import { style } from '@vanilla-extract/css';

export const wrap = style({
  padding: 24,
  display: 'grid',
  gap: 12,
  borderRadius: 16,
});

export const title = style({
  fontWeight: 700,
});

export const desc = style({
  opacity: 0.75,
  lineHeight: 1.5,
});

export const actions = style({
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
});
