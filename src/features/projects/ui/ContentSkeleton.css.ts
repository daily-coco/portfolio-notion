import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/tokens.css';

export const page = style({
  display: 'grid',
  gap: 24,
  width: '100%',
  minHeight: '70vh',
});

export const header = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: 24,
  alignItems: 'start',
  width: '100%',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const thumb = style({
  width: '100%',
  maxWidth: '340px',
  minHeight: 150,
  aspectRatio: '4 / 3',
});

export const meta = style({
  display: 'grid',
  gap: 12,
  width: '100%',
  alignContent: 'start',
});

export const tagRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  marginTop: 4,
});

export const body = style({
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

export const bodyBlock = style({
  width: '100%',
  minHeight: 280,
  marginTop: 8,
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: 16,
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const card = style({
  display: 'grid',
  gap: 10,
  padding: 20,
  borderRadius: 16,
});
