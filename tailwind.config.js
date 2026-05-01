/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eaf0f7',
          100: '#c8d9ec',
          200: '#a3c0e0',
          300: '#7da7d3',
          400: '#5a8fc6',
          500: '#3a78b9',
          600: '#2b62a0',
          700: '#1e4e84',
          800: '#133b68',
          900: '#0b284d',
          950: '#071d38',
          DEFAULT: '#0C2D55',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
