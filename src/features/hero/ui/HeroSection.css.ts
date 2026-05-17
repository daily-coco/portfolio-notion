import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '../../../styles/tokens.css';

export const section = style({
  paddingTop: '5.375em',
  paddingBottom: vars.space.xl,
});

export const inner = style({
  display: 'grid',
  gap: vars.space.lg,
  alignItems: 'stretch',
  position: 'relative',
  zIndex: 1,
  margin: '0 auto',
  maxWidth: '1200px',

  '@media': {
    'screen and (max-width: 960px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const content = style({});

export const eyebrow = style({
  margin: 0,
  marginBottom: vars.space.sm,
  fontSize: '0.8125rem',
  fontWeight: 700,
  lineHeight: 1.4,
  color: '#4D4B4A',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
});

export const title = style({
  margin: 0,
  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
  lineHeight: 1.15,
  fontWeight: 800,
  letterSpacing: '-0.03em',
  color: vars.color.text,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: '2rem',
      lineHeight: 1.2,
    },
  },
});

export const titleText = style({
  zIndex: '1',
  display: 'block',
  position: 'relative',
  margin: '0 5px 0 0',
  '@media': {
    'screen and (max-width: 767px)': {
      display: 'inline',
    },
  },
});

const linearTextAnimation = keyframes({
  '0%': {
    backgroundPosition: '200% 0%',
  },
  '100%': {
    backgroundPosition: '-200% 0%',
  },
});

export const liner = style({
  position: 'relative',
  selectors: {
    '&::after': {
      content: '',
      opacity: 0.72,
      zIndex: '-1',
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      height: '1rem',
      borderRadius: '9999px',
      backgroundColor: '#E9E1D8',
      background:
        'linear-gradient(303deg,rgba(233, 225, 216, 1) 0%, rgba(250, 214, 177, 1) 25%, rgba(255, 240, 219, 1) 50%, rgba(250, 214, 177, 1) 75%, rgba(233, 225, 216, 1) 100%);',
      backgroundSize: '200% 100%',
      animation: `${linearTextAnimation} 5s linear infinite`,
    },
  },
});

export const description = style({
  margin: 0,
  marginTop: vars.space.md,
  maxWidth: '60ch',
  fontSize: '1rem',
  lineHeight: 1.7,
  color: vars.color.textSubtle,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
    },
  },
});
export const heroShapeCircle = style({
  position: 'absolute',
  zIndex: '0',
  aspectRatio: '1 / 1',
  borderRadius: '100%',
});

const heroCircleanimation1 = keyframes({
  '0%': {
    transform: 'scale(100%)',
  },
  '50%': {
    transform: 'scale(110%)',
  },
  '100%': {
    transform: 'scale(100%)',
  },
});

const heroCircleanimation2 = keyframes({
  '0%': {
    transform: 'scale(100%)',
  },
  '50%': {
    transform: 'scale(90%)',
  },
  '100%': {
    transform: 'scale(100%)',
  },
});

export const heroShapeCircle1 = style([
  heroShapeCircle,
  {
    opacity: 0.5,
    width: 'clamp(110px, 13.75rem, 220px)',
    top: '2.8125rem',
    right: '23.25rem',
    background: '#fff',
    animation: `${heroCircleanimation1} 8s ease infinite`,
  },
]);
export const heroShapeCircle2 = style([
  heroShapeCircle,
  {
    opacity: 0.38,
    top: '-7.5rem',
    right: '-2.75rem',
    width: 'clamp(220px, 26.25rem, 440px)',
    background: '#F0ECE7',
    animation: `${heroCircleanimation2} 10s ease infinite`,
  },
]);

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

// heroSummaryCard
export const heroSummaryCard = style({});
export const heroSummaryName = style({
  display: 'flex',
  flexDirection: 'column-reverse',
  fontSize: '2.375rem',
  fontWeight: 600,
  color: '#111',
});
export const heroSummaryJob = style({
  fontSize: '0.9375rem',
  fontWeight: 600,
  color: '#8A8A8A',
  letterSpacing: '-0.015em',
  lineHeight: 1,
});

export const heroSummaryList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  marginBlock: '1.375rem 0',
  width: '100%',
  '@media': {
    'screen and (max-width: 767px)': {
      gridTemplateColumns: '1fr',
    },
  },
});
const loopSelectors: Record<string, any> = {};
for (let num = 1; num < 4; num++) {
  loopSelectors[`&:nth-child(${num})`] = {
    background: `url("/src/assets/images/hero/bg_hero_summary_${num}.png") no-repeat right bottom`,
    backgroundSize: '150px auto',
  };
}
export const heroSummaryItem = style({
  overflow: 'hidden',
  position: 'relative',
  border: '1px solid #E2DED9',
  borderRadius: '14px',
  padding: '1.5625rem 1.875rem',
  background: '#fff',
  boxSizing: 'border-box',
  selectors: {
    ...loopSelectors,
    '&::after': {
      content: '',
      zIndex: '0',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background:
        'linear-gradient(90deg, rgba(255, 255, 255,0.6) 0%, rgba(255, 255, 255, 0) 100%)',
    },
  },
  '@media': {
    'screen and (max-width:768px)': {
      padding: '1.3rem 1rem',
    },
  },
});

export const baseHeroSummaryStyle = style({
  position: 'relative',
  zIndex: 1,
});

export const heroSummaryTitle = style([
  baseHeroSummaryStyle,
  {
    fontSize: '1.375rem',
    fontWeight: 600,
    color: '#121212',
    lineHeight: 1.45,
    wordBreak: 'keep-all',
    '@media': {
      'screen and (max-width: 767px)': {
        fontSize: '1.125rem',
      },
    },
  },
]);

export const heroSummaryLabel = style({
  zIndex: 1,
  position: 'relative',
  display: 'flex',
  alignItems: 'stretch',
  gap: '3px',
  margin: 0,
  height: 'max-content',
  fontSize: '0.8125rem',
  fontWeight: 700,
  color: '#9A8068',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  lineHeight: 1.4,
  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: '0.6875rem',
    },
  },
});

export const heroSummaryValue = style([
  baseHeroSummaryStyle,
  {
    marginBlock: '1rem 0',
    fontSize: '1rem',
    lineHeight: 1.45,
    fontWeight: 400,
    color: '#555',
  },
]);
