import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../styles/tokens.css';

export const card = style({
  padding: vars.space.md,
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.sm,
});

export const padding = styleVariants({
  none: { padding: 0 },
  sm: { padding: vars.space.md },
  md: { padding: vars.space.lg },
  lg: { padding: vars.space.xl },
});

export const interactive = style({
  cursor: 'pointer',
  transition: 'transform 120ms ease, box-shadow 120ms ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: vars.shadow.md,
    },
    '&:active': {
      transform: 'translateY(0px)',
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: 2,
    },
  },
});
