/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      acrom: ['Acrom', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1380px',
      },
    },
    extend: {
      height: {
        138: '34.75rem',
      },
      colors: {
        danger: '#E50B0B',
        primary: {
          100: '#003336',
          200: '#043538',
          300: '#013336',
        },
        secondary: {
          100: '#404040',
          200: '#454142',
          300: '#929292',
          400: '#CDCDCD',
        },
        gray: {
          50: '#E6E6E6',
          100: '#C6C6C6',
          light: '#F9F9F9',
          darker: '#d9d9d9',
          dark: '#B3B3B3',
          500: '#AFAFAF',
        },
      },
      borderRadius: {
        default: '0.625rem',
      },
      boxShadow: {
        'btn-shadow': '0px 7px 11px rgba(0, 0, 0, 0.22)',
        category: '0px 9px 19px rgba(0, 0, 0, 0.13)',
        credit: '0px 4px 45px rgba(0, 0, 0, 0.16)',
      },
      content: {
        heading: ' ',
      },
    },
  },
  plugins: [],
};
