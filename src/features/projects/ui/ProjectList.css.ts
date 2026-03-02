import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/tokens.css';

export const grid = style({
  marginTop: vars.space.lg,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))',
  gap: vars.space.md,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const link = style({
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
});

export const cardInner = style({
  display: 'grid',
  gap: vars.space.sm,
});

export const figure = style({
  margin: 0,
});

export const thumb = style({
  width: '100%',
  height: 140,
  objectFit: 'cover',
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  display: 'block',
  background: vars.color.surface,
});

export const title = style({
  fontWeight: 700,
  lineHeight: 1.3,
});

export const date = style({
  fontSize: vars.font.size.sm,
  color: vars.color.mutedText,
});

export const tags = style({
  display: 'flex',
  gap: vars.space.xs,
  flexWrap: 'wrap',
  alignItems: 'center',
});

export const tag = style({
  fontSize: vars.font.size.sm,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.border}`,
  background: 'transparent',
});

export const more = style({
  fontSize: vars.font.size.sm,
  color: vars.color.mutedText,
});

export const summary = style({
  fontSize: vars.font.size.md,
  lineHeight: 1.5,
  opacity: 0.9,
});

export const empty = style({
  padding: vars.space.xl,
  color: vars.color.mutedText,
});
