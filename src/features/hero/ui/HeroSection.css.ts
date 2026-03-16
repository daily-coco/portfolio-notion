import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/tokens.css';

export const section = style({
  paddingTop: vars.space.xl,
  paddingBottom: vars.space.xl,
});

export const inner = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 0.8fr)',
  gap: vars.space.lg,
  alignItems: 'stretch',
  margin: '0 auto',
  maxWidth: '1200px',

  '@media': {
    'screen and (max-width: 960px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minWidth: 0,
});

export const eyebrow = style({
  margin: 0,
  marginBottom: vars.space.sm,
  fontSize: '0.8125rem',
  lineHeight: 1.4,
  letterSpacing: '0.08em',
  fontWeight: 700,
  textTransform: 'uppercase',
  color: vars.color.textSubtle,
});

export const title = style({
  margin: 0,
  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
  lineHeight: 1.15,
  fontWeight: 800,
  letterSpacing: '-0.03em',
  color: vars.color.text,

  '@media': {
    'screen and (max-width: 640px)': {
      fontSize: '2rem',
      lineHeight: 1.2,
    },
  },
});

export const titleBreak = style({
  margin: '0 0 0 5px',
});

export const description = style({
  margin: 0,
  marginTop: vars.space.md,
  maxWidth: '60ch',
  fontSize: '1rem',
  lineHeight: 1.7,
  color: vars.color.textSubtle,

  '@media': {
    'screen and (max-width: 640px)': {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
    },
  },
});

export const actions = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.sm,
  marginTop: vars.space.lg,
});

const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 44,
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.lg,
  fontSize: '0.95rem',
  fontWeight: 600,
  textDecoration: 'none',
  transition:
    'transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',

  selectors: {
    '&:hover': {
      transform: 'translateY(-1px)',
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.text}`,
      outlineOffset: 2,
    },
  },
});

export const primaryButton = style([
  buttonBase,
  {
    backgroundColor: vars.color.text,
    color: vars.color.bg,
    border: `1px solid ${vars.color.text}`,
  },
]);

export const secondaryButton = style([
  buttonBase,
  {
    backgroundColor: 'transparent',
    color: vars.color.text,
    border: `1px solid ${vars.color.border}`,
  },
]);

export const summaryCard = style({
  display: 'flex',
  alignItems: 'stretch',
  minWidth: 0,
  padding: vars.space.lg,
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  boxShadow: vars.shadow.sm,

  '@media': {
    'screen and (max-width: 960px)': {
      padding: vars.space.md,
    },
  },
});

export const summaryList = style({
  display: 'grid',
  width: '100%',
  gap: vars.space.md,
  margin: 0,
});

export const summaryItem = style({
  display: 'grid',
  gap: 6,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.color.border}`,

  selectors: {
    '&:last-child': {
      paddingBottom: 0,
      borderBottom: 'none',
    },
  },
});

export const summaryLabel = style({
  margin: 0,
  fontSize: '0.8125rem',
  lineHeight: 1.4,
  fontWeight: 700,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: vars.color.textSubtle,
});

export const summaryValue = style({
  margin: 0,
  fontSize: '1rem',
  lineHeight: 1.6,
  fontWeight: 600,
  color: vars.color.text,
});
