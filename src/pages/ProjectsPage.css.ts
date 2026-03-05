import { style } from '@vanilla-extract/css';
import { vars } from '../styles/tokens.css';

export const page = style({
  padding: vars.space.xs,
  display: 'grid',
  gap: vars.space.lg,
});
