import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/tokens.css';

export const section = style({
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
