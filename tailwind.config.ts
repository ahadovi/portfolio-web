import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    fontFamily: {
      system: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        ' Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Open Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    extend: {
      fontSize: {
        base: ['16px', { lineHeight: '24px' }],
      },
      colors: {
        bgInactiveLightLink: '#ebebef',
        bgInactiveDarkLink: '#32363f',
        bgInactiveLight: '#f6f6f7',
        bgInactiveDark: '#202127',
        textLight: {
          DEFAULT: 'rgb(60,60,67)',
          600: 'rgba(60, 60, 67, .56)',
          800: 'rgba(60, 60, 67, .78)',
        },
        textDark: {
          DEFAULT: 'rgba(255, 255, 245, .86)',
          600: 'rgba(235, 235, 245, .6)',
          300: 'rgba(235, 235, 245, .38)',
        },
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
export default config;
