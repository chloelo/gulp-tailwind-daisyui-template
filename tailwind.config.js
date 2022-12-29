module.exports = {
  content: ["./src/**/*.{html,ejs,scss}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          900: '#3D1B7A',
          800: '#451D8F',
          700: '#5424AD',
          600: '#7236E3',
          500: '#7E49E3',
          400: '#976FED',
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}