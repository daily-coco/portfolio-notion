import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    bg: '#ffffff',
    surface: '#f8f9fa',
    text: '#111111',
    mutedText: '#6b7280',
    border: '#e5e7eb',
    accent: '#3b82f6',
    danger: '#ef4444',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    full: '999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 12px rgba(0,0,0,0.08)',
  },

  font: {
    size: {
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      xxl: '28px',
    },
  },
});
