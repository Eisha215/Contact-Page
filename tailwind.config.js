/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "football-boys" : "url('/src/assets/images/about.ong')" ,
      }
    },
  },
  plugins: [],
}

