/** @type {import('tailwindcss').Config} */
import { colors as defaultColors } from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./public/*.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Roboto Slab', 'serif'],
        gillSans: ['Gill Sans', 'sans-serif'],
      },
      colors: {
        'custom-blue': { normal: '#4369B2', dark: '#2D4573', light: '#5688E4' },
      },
    },
  },
  plugins: [],
};
