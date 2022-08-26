/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  
  theme: {
    extend: {},

    container: {
      center: true,
    },

    fontFamily: {
      'sans': 'Segoe UI',
    },

    fontSize: {
      'navfont': ['10px', {
        lineHeight: '13.3px',
      }],
    },

    colors: {
      'dark-blue': '#273371',
    },
  
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
}