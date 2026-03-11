import { style } from '@vanilla-extract/css';
import { vars } from '../styles/tokens.css';

export const detailPageWrap = style({
  display: 'grid',
  justifyContent: 'center',
  padding: '30px 0',
  '@media': {
    'screen and (max-width:768px)': {
      padding: '50px 20px',
    },
  },
});

export const detailPageInner = style({
  maxWidth: 920,
  width: '100%',
});

export const detailPageTopNav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space.sm,
});

export const title = style({
  margin: 0,
  fontSize: vars.font.size.xxl,
});

export const meta = style({
  color: vars.color.mutedText,
  fontSize: vars.font.size.sm,
});

export const summary = style({
  margin: 0,
  maxWidth: 920,
  lineHeight: 1.6,
});

export const tags = style({
  display: 'flex',
  gap: vars.space.xs,
  flexWrap: 'wrap',
  alignItems: 'center',
});

export const tag = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.border}`,
  fontSize: vars.font.size.sm,
  background: 'transparent',
});

export const detailHeadWrap = style({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  gap: 12,
  '@media': {
    'screen and (max-width:768px)': {
      flexDirection: 'column',
    },
  },
});
export const detailInfo = style({
  flex: 1,
});
export const thumbnailWrap = style({
  overflow: 'hidden',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  width: '340px',
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  '@media': {
    'screen and (max-width:768px)': {
      width: '100%',
    },
  },
});
export const thumbnailImg = style({
  display: 'inline-flex',
  '@media': {
    'screen and (max-width:768px)': {
      width: '260px',
    },
  },
});

export const contentWrap = style({
  marginTop: vars.space.lg,
  maxWidth: 920,
});

export const contentCard = style({
  display: 'grid',
  gap: vars.space.md,
});

export const contentHint = style({
  color: vars.color.mutedText,
});

export const contentError = style({
  color: vars.color.danger,
});

export const navRow = style({
  display: 'flex',
  gap: vars.space.md,
  marginTop: vars.space.md,
  flexWrap: 'wrap',
  alignItems: 'center',
});

export const dim = style({
  opacity: 0.5,
});
