import { globalFontFace } from '@vanilla-extract/css';

globalFontFace('Pretendard', {
  src: 'url("/fonts/Pretendard-Regular.woff2") format("woff2")',
  fontWeight: '400',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace('Pretendard', {
  src: 'url("/fonts/Pretendard-Medium.woff2") format("woff2")',
  fontWeight: '500',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalFontFace('Pretendard', {
  src: 'url("/fonts/Pretendard-Bold.woff2") format("woff2")',
  fontWeight: '700',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});
