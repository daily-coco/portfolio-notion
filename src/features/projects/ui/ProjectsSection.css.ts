import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/tokens.css';
export const projectsInner = style({
  overflow: 'hidden',
  position: 'relative',
});
export const section = style({
  display: 'grid',
  gap: vars.space.lg,
  margin: '0 auto',
  maxWidth: '1200px',
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
