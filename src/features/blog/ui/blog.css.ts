import { style } from '@vanilla-extract/css';

export const section = style({
  padding: '96px 0',
});

export const inner = style({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
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

export const list = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '24px',

  '@media': {
    'screen and (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    'screen and (max-width: 767px)': {
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    },
  },
});

export const item = style({
  listStyle: 'none',
});

export const cardLink = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '20px',
  border: '1px solid #e5e7eb',
  background: '#fff',
  textDecoration: 'none',
  color: '#111',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',

  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
    },
  },
});

export const thumbnailWrap = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 10',
  overflow: 'hidden',
  background: '#f3f4f6',
});

export const thumbnail = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

export const thumbnailFallback = style({
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

export const category = style({
  display: 'inline-flex',
  alignItems: 'center',
  height: '28px',
  padding: '0 10px',
  borderRadius: '999px',
  background: '#f3f4f6',
  fontSize: '12px',
  fontWeight: 600,
  color: '#555',
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

export const postTitle = style({
  margin: 0,
  fontSize: '20px',
  lineHeight: 1.45,
  fontWeight: 700,
  color: '#111',
  wordBreak: 'keep-all',
});

export const summary = style({
  margin: 0,
  fontSize: '14px',
  lineHeight: 1.7,
  color: '#555',
  wordBreak: 'keep-all',
});

export const bottomRow = style({
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  paddingTop: '4px',
});

export const date = style({
  fontSize: '13px',
  lineHeight: 1.4,
  color: '#777',
});

export const arrow = style({
  fontSize: '18px',
  lineHeight: 1,
  color: '#888',
});
