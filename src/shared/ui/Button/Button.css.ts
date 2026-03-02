import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../styles/tokens.css';

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.xs,

  height: 36,
  padding: `0 ${vars.space.md}`,

  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,

  fontSize: vars.font.size.md,
  lineHeight: 1,
  cursor: 'pointer',
  userSelect: 'none',
  textDecoration: 'none',

  transition: 'transform 120ms ease, opacity 120ms ease, background 120ms ease',

  selectors: {
    '&:hover': { transform: 'translateY(-1px)' },
    '&:active': { transform: 'translateY(0px)', opacity: 0.9 },
    '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: 2,
    },
  },
});

type ButtonVariant = 'primary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export const variant = styleVariants({
  primary: {
    background: vars.color.accent,
    color: '#ffffff',
    borderColor: 'transparent',
  },
  ghost: {
    background: 'transparent',
  },
  danger: {
    background: vars.color.danger,
    color: '#ffffff',
    borderColor: 'transparent',
  },
}) satisfies Record<ButtonVariant, string>;

export const size = styleVariants({
  sm: {
    height: 32,
    padding: `0 ${vars.space.sm}`,
    fontSize: vars.font.size.sm,
  },
  md: { height: 36, padding: `0 ${vars.space.md}` },
  lg: {
    height: 44,
    padding: `0 ${vars.space.lg}`,
    fontSize: vars.font.size.lg,
  },
}) satisfies Record<ButtonSize, string>;
export const fullWidth = style({
  width: '100%',
});
