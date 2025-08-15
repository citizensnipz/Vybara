import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          light: 'var(--color-surface-light)',
          DEFAULT: 'var(--color-surface)',
          dark: 'var(--color-surface-dark)',
        },
        surfaceAlt: 'var(--color-surface-alt)',
        primary: {
          light: 'var(--color-primary-light)',
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        bubble: 'var(--color-bubble)',
      },
    },
  },
  plugins: [],
};

export default config;
