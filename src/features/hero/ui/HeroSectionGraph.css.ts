import { createVar, style } from '@vanilla-extract/css';

export const heroGraphContainer = style({
  position: 'relative',
  overflow: 'visible',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  width: '100%',
  margin: '0 auto',
  maxWidth: '870px',
  minWidth: '785px',
  '@media': {
    'screen and (max-width:960px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
      minWidth: 'auto',
    },
  },
});
export const heroGraphGroup = style({
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'flex-start',
  '@media': {
    'screen and (max-width:960px)': {
      marginTop: '1rem',
    },
  },
});

export const heroGraphGroupLabel = style({
  zIndex: '1',
  position: 'relative',
  paddingTop: '1rem',
  borderTop: '3px solid #CFCBC6',
  color: '#CFCBC6',
  lineHeight: 1,
  textAlign: 'center',
  textTransform: 'uppercase',
  selectors: {
    '&::before, &::after': {
      content: '',
      position: 'absolute',
      top: '-5px',
      width: '8px',
      height: '8px',
      borderRadius: '100%',
    },
    '&::before': {
      left: '0',
    },
    '&::after': {
      right: '0',
    },
  },
});

export const heroGraphPublishing = style({
  borderColor: '#CFCBC6',
  selectors: {
    '&::before, &::after': { backgroundColor: '#CFCBC6' },
  },
});

export const heroGraphFrontend = style({
  borderColor: '#B99B7E',
  color: '#B99B7E',
  selectors: {
    '&::before, &::after': { backgroundColor: '#B99B7E' },
  },
});

export const heroGraphList = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  width: '100%',
  alignItems: 'flex-end',
  justifyItems: 'center',
});

//li
export const heroGraphItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  paddingBlock: '4.5rem 0', //72px
  marginLeft: '4.375rem',
  width: '4.5rem', //72px
  textAlign: 'center',
  willChange: 'transform, opacity',

  '@media': {
    'screen and (max-width:960px)': {
      flex: '1 auto',
      marginLeft: 0,
      width: 'auto',
      paddingInline: '1rem',
    },
    'screen and (max-width:768px)': {
      paddingInline: '0.5rem',
    },
  },
});

export const heroGraphItemNoMargin = style({
  marginLeft: 0,
});

export const heroGraphIcon = style({
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  width: '4.5rem', //72px
  aspectRatio: '1',
  border: '2px solid #CFCBC6',
  borderRadius: '100%',
  willChange: 'transform, box-shadow',
});

// icon
export const heroGraphPublishing1 = style({
  background: `#fff url("/src/assets/images/hero/ico_hreo_manage.svg") no-repeat center`,
});
export const heroGraphPublishing2 = style({
  background: `#fff url("/src/assets/images/hero/ico_hreo_build.svg") no-repeat center`,
});
export const heroGraphPublishing3 = style({
  background: `#fff url("/src/assets/images/hero/ico_hreo_upgrade.svg") no-repeat center`,
});
export const heroGraphFrontend1 = style({
  borderColor: '#D3C3B4',
  background: `#fff url("/src/assets/images/hero/ico_hreo_component.svg") no-repeat center`,
});
export const heroGraphFrontend2 = style({
  borderColor: '#D3C3B4',
  background: `#fff url("/src/assets/images/hero/ico_hreo_status.svg") no-repeat center`,
});
export const heroGraphFrontend3 = style({
  borderColor: '#B99B7E',
  background: `#fff url("/src/assets/images/hero/ico_hreo_ui.svg") no-repeat center`,
});

export const isExtend = style({});

export const heroGraphTitle = style({
  marginBlock: '0.875rem 0.5625rem',
  fontSize: '1rem',
  color: '#24211F',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  '@media': {
    'screen and (max-width:960px)': {
      whiteSpace: 'normal',
      wordBreak: 'keep-all',
    },
  },
});
export const heroGraphDesc = style({
  fontSize: '0.8125rem',
  color: '#76716B',
  lineHeight: 1.25,
  whiteSpace: 'nowrap',
  '@media': {
    'screen and (max-width:960px)': {
      whiteSpace: 'normal',
      wordBreak: 'keep-all',
    },
  },
});

//Publishing - heroGraph1
export const heroGraph1 = style({
  marginBottom: '2.5rem',
  '@media': {
    'screen and (max-width:960px)': {
      marginBottom: '1rem',
    },
  },
});

// Frontend1 - heroGraph2
export const heroGraph2 = style({
  marginBottom: '5.625rem',
  '@media': {
    'screen and (max-width:960px)': {
      marginBottom: '1rem',
    },
  },
});

// Frontend2 - heroGraph3
export const heroGraph3 = style({
  marginBottom: '6.875rem',
  '@media': {
    'screen and (max-width:960px)': {
      marginBottom: '1rem',
    },
  },
});

// Frontend3 - heroGraph4
export const heroGraph4 = style({
  marginBottom: '9.6875rem',
  '@media': {
    'screen and (max-width:960px)': {
      marginBottom: '1rem',
    },
  },
});
export const heroGraphLineSvg = style({
  zIndex: 0,
  pointerEvents: 'none',
  overflow: 'visible',
  position: 'absolute',
  top: '2rem', // 45 -> 32
  left: '50%',
  width: '100%',
  maxWidth: '719px',
  height: 'auto',
  transform: 'translateX(-50%)',
  '@media': {
    'screen and (max-width:960px)': {
      opacity: 0,
    },
  },
});
export const heroGraphLineBase = style({
  opacity: 0.8,
  stroke: '#cfcfcf',
  strokeWidth: 4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

const heroGraphLineColor = createVar();
export const heroGraphLinePublishing = style({
  vars: {
    [heroGraphLineColor]: '#C3AD98',
  },
});

export const heroGraphLineFrontend = style({
  vars: {
    [heroGraphLineColor]: '#B99B7E',
  },
});

export const heroGraphLineTrack = style({
  stroke: '#D2CECA',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  opacity: 0.75,
});

export const heroGraphLineProgress = style({
  stroke: heroGraphLineColor,
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeDasharray: '100',
  strokeDashoffset: '100',
  opacity: 0,
  willChange: 'stroke-dashoffset, opacity',
});
