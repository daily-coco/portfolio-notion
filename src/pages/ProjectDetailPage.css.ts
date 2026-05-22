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
  '@media': {
    'screen and (min-width:1024px)': {
      minWidth: 920,
    },
  },
});

export const detailPageTopNav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space.sm,
});

export const detailHeadWrap = style({
  display: 'grid',
  gap: 12,
  gridTemplateColumns: 'auto 1fr',

  '@media': {
    'screen and (max-width:768px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
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

export const detailInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
});

export const detailInfoTitle = style({
  margin: 0,
  fontSize: vars.font.size.xxl,
});

export const detailInfoSummary = style({
  margin: '10px 0 0',
});

export const detailInfoTag = style({
  color: vars.color.mutedText,
  fontSize: vars.font.size.sm,
});

export const tags = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: vars.space.xs,
  fontSize: vars.font.size.xs,
});

export const tag = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.border}`,
  fontSize: vars.font.size.sm,
  background: 'transparent',
});

export const contentWrap = style({
  display: 'grid',
  gap: 12,
  marginTop: vars.space.lg,
  padding: 20,
  width: '100%',
  maxWidth: 920,
  borderRadius: 20,
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
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
  justifyContent: 'center',
  marginTop: vars.space.xxl,
  '@media': {
    'screen and (max-width:768px)': {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
});

export const pageNavButton = style({
  color: '#333',
});

export const pageNavText = style({
  color: '#333',
});

export const pageListButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
