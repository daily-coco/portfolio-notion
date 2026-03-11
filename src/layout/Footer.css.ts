import { style } from '@vanilla-extract/css';
import { vars } from '../styles/tokens.css';

export const footerWrap = style({
  display: 'grid',
  alignContent: 'center',
  justifyContent: 'center',
  minHeight: '100px',
  padding: '10px',
  fontSize: '11px',
});
