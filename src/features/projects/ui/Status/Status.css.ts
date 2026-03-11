import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'grid',
  gap: 12,
  padding: 24,
  justifyItems: 'center',
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
  flexWrap: 'wrap',
  gap: 8,
});
