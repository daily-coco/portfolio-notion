import { style } from '@vanilla-extract/css';
import { vars } from '../styles/tokens.css';

export const page = style({
  padding: vars.space.xs,
  display: 'grid',
  gap: vars.space.lg,
});

export const header = style({
  display: 'grid',
  gap: vars.space.xs,
});

export const title = style({
  margin: 0,
  fontSize: vars.font.size.xxl,
});

export const meta = style({
  color: vars.color.mutedText,
  fontSize: vars.font.size.sm,
});

export const subtle = style({
  opacity: 0.75,
});

export const loadingWrap = style({
  padding: 24,
  display: 'grid',
  gap: 16,
});

export const skTitleBlock = style({
  display: 'grid',
  gap: 8,
  maxWidth: 520,
});

export const skToolbarRow = style({
  display: 'flex',
  gap: 12,
  flexWrap: 'wrap',
});

export const skListBlock = style({
  display: 'grid',
  gap: 10,
  maxWidth: 520,
});

export const skTagsRow = style({
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
  marginTop: 8,
});

export const stateWrap = style({
  padding: vars.space.xl,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  background: vars.color.surface,
  display: 'grid',
  gap: vars.space.sm,
});

export const stateTitle = style({
  fontWeight: 700,
});

export const stateButton = style({
  width: 'fit-content',
});
