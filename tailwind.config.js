/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  
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
      'green': '#30CEAF',
      'background': '#F5F6FD',
    },
  
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
}