/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      "lg": {'max': '1224px'},
      "md": {'max': '960px'},
      "sm": {'max': '639px'}
    },
    container: {
      center:true,
      padding: '1rem',
      screens: {
        lg: "1224px"
      }
    },
    extend: {},
  },
  plugins: [],
}

