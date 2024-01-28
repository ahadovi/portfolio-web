import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
        textPrimary: '#0f172a',
        textSecondary: '#07A8ED',
        textPara: '#334155',
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
export default config;
