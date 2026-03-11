import { style } from '@vanilla-extract/css';

export const section = style({
  padding: '96px 25px',
});

export const inner = style({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
});

export const header = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '16px',
  marginBottom: '32px',
  flexWrap: 'wrap',
});

export const eybrow = style({
  display: 'block',
  marginBottom: '8px',
  fontSize: '13px',
  lineHeight: 1.4,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#666',
});

export const title = style({
  fontSize: '32px',
  lineHeight: 1.25,
  fontWeight: 700,
  color: '#111',
  margin: 0,
});

export const moreLink = style({
  fontSize: '14px',
  lineHeight: 1.4,
  color: '#111',
  textDecoration: 'none',
  borderBottom: '1px solid #111',
  paddingBottom: '2px',
  selectors: {
    '&:hover': {
      opacity: 0.7,
    },
  },
});

export const postList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '24px',
  '@media': {
    'screen and (max-width:768px)': {
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    },
  },
});

export const postItem = style({
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid #e5e7eb',
  borderRadius: '1rem',
  background: '#fff',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&:first-of-type': {
      gridRow: '1 / 4',
    },

    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
    },
  },
});

export const postItemFeatured = style({});

export const postBadgeWrapFeatured = style({
  '@media': {
    'screen and (max-width: 768px)': {
      position: 'absolute',
      top: 10,
      left: 10,
    },
  },
});

export const postContentFeatured = style({
  padding: '10px',
  '@media': {
    'screen and (max-width: 768px)': {
      position: 'absolute',
      top: 50,
      left: 10,
    },
  },
});

export const postLink = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  padding: '10px',
  height: '100%',
  color: '#111',

  selectors: {
    '&::after': {
      zIndex: -1,
      content: '',
      position: 'absolute',
      bottom: 0,
      right: 0,
      transform: 'translateX(100%)',
      opacity: 0.4,
      width: '100%',
      height: '100%',
      backgroundColor: '#2A7B9B',
      background:
        'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(87, 199, 133, 1) 40%, rgba(237, 221, 83, 1) 100%)',
    },
    '&:hover::after': {
      transform: 'translateX(0)',
      transition: 'transform 1s ease',
    },
  },
});

export const postThumbnailWrap = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 10',
  overflow: 'hidden',
  background: '#f3f4f6',
});

export const postThumbnail = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

export const postThumbnailFallback = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  color: '#888',
  background: '#f3f4f6',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '20px',
  flex: 1,
});

export const metaRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexWrap: 'wrap',
});

export const postLinkFeatured = style({});

export const postBadgeWrap = style({
  zIndex: 1,
  position: 'absolute',
  top: 5,
  left: 5,
  display: 'flex',
  gap: 4,
  flexDirection: 'row',
  '@media': {
    'screen and (max-width:768px)': {
      position: 'relative',
      top: 0,
      left: 0,
    },
  },
});

export const recentBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  height: '28px',
  padding: '0 10px',
  borderRadius: '999px',
  background: '#111',
  fontSize: '12px',
  fontWeight: 600,
  color: '#fff',
});

export const categoryBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  height: '28px',
  padding: '0 10px',
  borderRadius: '999px',
  background: '#111',
  fontSize: '12px',
  fontWeight: 600,
  color: '#fff',
});

export const postTitle = style({
  margin: 0,
  fontSize: '20px',
  lineHeight: 1.45,
  fontWeight: 700,
  color: '#111',
  wordBreak: 'keep-all',
});

export const postContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const postSummary = style({
  margin: 0,
  fontSize: '14px',
  lineHeight: 1.7,
  color: '#555',
  wordBreak: 'keep-all',
});

export const postDate = style({
  fontSize: '13px',
  lineHeight: 1.4,
  color: '#777',
});

export const bottomRow = style({
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  paddingTop: '4px',
});
export const arrow = style({
  fontSize: '18px',
  lineHeight: 1,
  color: '#888',
});
