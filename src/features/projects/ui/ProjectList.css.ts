import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/tokens.css';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))',
  gap: vars.space.md,
  marginTop: vars.space.lg,
});

export const link = style({
  display: 'block',
  height: '100%',
  color: 'inherit',
  textDecoration: 'none',
});

export const cardInner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  gap: vars.space.xs,
  height: '100%',
  minWidth: 0,
});

export const figure = style({
  overflow: 'hidden',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'center',
  width: '100%',
  height: 140,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: '#fff',
});

export const thumb = style({
  objectFit: 'cover',
  display: 'block',
  height: '100%',
});

export const title = style({
  fontWeight: 700,
  lineHeight: 1.3,
});

export const date = style({
  fontSize: vars.font.size.sm,
  color: vars.color.mutedText,
});

export const cardTagsWrap = style({
  overflowX: 'auto',
  overflowY: 'hidden',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none',
  touchAction: 'pan-x',
  minWidth: 0,
  width: '100%',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
export const cardTagsList = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2px',
  minWidth: 'max-content',
  whiteSpace: 'nowrap',
});
export const cardTagsTag = style({
  flex: '0 0 auto',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  padding: '6px 12px',
  fontSize: 11,
  borderRadius: '999px',
  border: '1px solid #ddd',
  background: '#fff',
});
export const cardTagsMore = style({
  opacity: 0.6,
  margin: ' 0 0 0 2px',
  fontSize: 11,
});

export const tags = style({
  display: 'flex',
  gap: vars.space.xs,
  flexWrap: 'wrap',
  alignItems: 'center',
});

export const tag = style({
  fontSize: vars.font.size.sm,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.border}`,
  background: 'transparent',
});

export const more = style({
  fontSize: vars.font.size.sm,
  color: vars.color.mutedText,
});

export const summary = style({
  fontSize: vars.font.size.md,
  lineHeight: 1.5,
  opacity: 0.9,
});

export const empty = style({
  padding: vars.space.xl,
  color: vars.color.mutedText,
});
