import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/tokens.css';

export const wrap = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.sm,
  marginTop: vars.space.md,
});
