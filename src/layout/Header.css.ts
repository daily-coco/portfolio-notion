import { style } from '@vanilla-extract/css';
import { vars } from '../styles/tokens.css';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  width: '100%',
  backdropFilter: 'blur(12px)',
  background: 'rgba(255, 255, 255, 0.72)',
  borderBottom: `1px solid ${vars.color.border}`,
});

export const inner = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `${vars.space.lg} ${vars.space.xl}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.lg,
});

export const logoLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const logoImage = style({
  width: '50px',
  height: '50px',
  display: 'block',
});

export const nav = style({});

export const navList = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const navLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '36px',
  padding: `0 ${vars.space.lg}`,
  borderRadius: vars.radius.full,
  textDecoration: 'none',
  color: vars.color.mutedText,
  fontSize: vars.font.size.md,
  fontWeight: 500,
  transition:
    'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&:hover': {
      background: vars.color.surface,
      color: vars.color.text,
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${vars.color.accent}`,
    },
  },
});

export const navLinkActive = style({
  background: vars.color.surface,
  color: vars.color.text,
});
