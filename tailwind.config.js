module.exports = {
  content: ["./src/**/*.{html,ejs,scss}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          900: '#3D1B7A',
          800: '#451D8F',
          700: '#5424AD',
          600: '#555',
          500: '#667080',
          400: '#6584de',
          300: '#B495F3',
          200: '#C4AEF7',
          100: '#D6C7F9',
          50: '#ECE6FA',
        },
        'tahiti': {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
        'secondary': '#EEF1F4',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}