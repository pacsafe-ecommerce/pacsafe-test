let plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./**/*.liquid', './frontend/**/*.{js,ts,jsx,tsx}'],
  safelist: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
