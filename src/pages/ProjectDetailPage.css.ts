import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/tokens.css';

export const page = style({
  padding: vars.space.xl,
  display: 'grid',
  gap: vars.space.md,
});

export const backRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const container = style({
  maxWidth: 920,
  width: '100%',
});

export const thumb = style({
  width: '100%',
  maxWidth: 920,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  display: 'block',
  background: vars.color.surface,
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

/** Markdown 기본 스타일(이 페이지에서만 적용) */
export const markdown = style({
  overflow: 'hidden',
  fontSize: 16,
  lineHeight: 1.75,
  wordBreak: 'break-word',
});

export const tableScroll = style({
  maxWidth: '100%',
  overflowX: 'auto',
});

globalStyle(`${markdown} h1, ${markdown} h2, ${markdown} h3`, {
  margin: `${vars.space.lg} 0 ${vars.space.sm}`,
  lineHeight: 1.3,
});

globalStyle(`${markdown} p`, {
  margin: `${vars.space.sm} 0`,
});

globalStyle(`${markdown} ul, ${markdown} ol`, {
  margin: `${vars.space.sm} 0`,
  paddingLeft: '1.2em',
});

globalStyle(`${markdown} a`, {
  color: vars.color.accent,
  textDecoration: 'underline',
  textUnderlineOffset: 3,
});

globalStyle(`${markdown} code`, {
  fontSize: '0.95em',
});

globalStyle(`${markdown} pre`, {
  padding: vars.space.md,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  overflowX: 'auto',
  background: vars.color.surface,
  margin: '1em 0',
});
globalStyle(`${markdown} :where(img, video, iframe)`, {
  maxWidth: '100%',
  height: 'auto',
});

globalStyle(`${markdown} p`, { margin: '0.75em 0' });

globalStyle(`${markdown} :where(ul, ol)`, {
  margin: '0.75em 0',
  paddingLeft: '1.25em',
});

globalStyle(`${markdown} :where(h1, h2, h3)`, {
  margin: '1.2em 0 0.6em',
});

globalStyle(`${tableScroll} table`, {
  width: '100%',
  borderCollapse: 'collapse',
});

globalStyle(`${tableScroll} :where(th, td)`, {
  padding: '0.6em 0.75em',
  border: '1px solid rgba(0,0,0,0.12)',
  verticalAlign: 'top',
});
