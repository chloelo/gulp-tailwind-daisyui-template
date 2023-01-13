module.exports = {
  // node_modules/tw-elements/dist/js/index.min.js
  content: ['./src/**/*.{html,ejs,scss}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#667080',
          900: '#3D1B7A',
          800: '#451D8F',
          700: '#5424AD',
          600: '#555',
          500: '#3D1B7A',
          400: '#6584de',
          300: '#B495F3',
          200: '#C4AEF7',
          100: '#D6C7F9',
          50: '#ECE6FA',
        },
        'secondary': {
          DEFAULT: '#EEF1F4'
        },
        'tahiti': {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
      },
    },
  },
  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         ...require('daisyui/src/colors/themes')['[data-theme=light]'],
  //         primary: '#667080',
  //         secondary: '#EEF1F4',
  //         'primary-focus': '#555',
  //         "secondary-content": "#667080",
  //       },
  //     },
  //   ],
  // },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
}