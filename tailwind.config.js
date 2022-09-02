/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  
  theme: {
    extend: {
    },

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
      'board-font': ['17px', {
        lineHeight: '23px',
      }],
      'main-font': ['14px', {
        lineHeight: '19px',
      }],
      'button-font': ['13px', {
        lineHeight: '17px',
      }],

    },

    boxShadow: {
      'chartShadow': '0px 2px 2px rgba(21, 28, 61, 0.24)',
    },

    colors: {
      'dark-blue': '#273371',
      'green': '#30CEAF',
      'background': '#F5F6FD',
      'mainfont': '#151C3D',
      'blue': '#2C52BF',
      'white': '#FFFFFF',
    },
  
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
}