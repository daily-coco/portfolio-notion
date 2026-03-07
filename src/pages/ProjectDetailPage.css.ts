import { style } from '@vanilla-extract/css';
import { vars } from '../styles/tokens.css';

export const page = style({
  padding: vars.space.xl,
  display: 'grid',
  gap: vars.space.md,
});

export const backRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const container = style({
  maxWidth: 920,
  width: '100%',
});

export const thumb = style({
  width: '100%',
  maxWidth: 920,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  display: 'block',
  background: vars.color.surface,
});

export const title = style({
  margin: 0,
  fontSize: vars.font.size.xxl,
});

export const meta = style({
  color: vars.color.mutedText,
  fontSize: vars.font.size.sm,
});

export const summary = style({
  margin: 0,
  maxWidth: 920,
  lineHeight: 1.6,
});

export const tags = style({
  display: 'flex',
  gap: vars.space.xs,
  flexWrap: 'wrap',
  alignItems: 'center',
});

export const tag = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.border}`,
  fontSize: vars.font.size.sm,
  background: 'transparent',
});

export const contentWrap = style({
  marginTop: vars.space.lg,
  maxWidth: 920,
});

export const contentCard = style({
  display: 'grid',
  gap: vars.space.md,
});

export const contentHint = style({
  color: vars.color.mutedText,
});

export const contentError = style({
  color: vars.color.danger,
});

export const navRow = style({
  display: 'flex',
  gap: vars.space.md,
  marginTop: vars.space.md,
  flexWrap: 'wrap',
  alignItems: 'center',
});

export const dim = style({
  opacity: 0.5,
});
