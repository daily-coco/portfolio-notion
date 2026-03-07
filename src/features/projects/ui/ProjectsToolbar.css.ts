import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/tokens.css';

export const bar = style({
  display: 'flex',
  gap: vars.space.md,
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const control = style({
  height: 36,
  padding: `0 ${vars.space.md}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bg,
  fontSize: vars.font.size.md,
  outline: 'none',

  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: 2,
    },
  },
});

export const searchWrap = style({
  position: 'relative',
  flex: '1 1 240px',
  minWidth: 220,
});

export const searchInput = style([
  control,
  {
    width: '100%',
    paddingRight: '40px',
  },
]);

export const clearX = style({
  position: 'absolute',
  right: 8,
  top: '50%',
  transform: 'translateY(-50%)',
  height: 28,
  width: 28,
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vars.font.size.sm,
  lineHeight: 1,

  selectors: {
    '&:hover': { opacity: 0.9 },
    '&:active': { opacity: 0.8 },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: 2,
    },
  },
});
