/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        josefin:['Josefin Sans', 'sans-serif']
      },
      colors: {
        primary: {
          brightBlue: "hsl(220, 98%, 61%)"
        },
        dark: {
          veryDarkBlue:"hsl(235, 21%, 11%)",
          desaturatedBlue:"hsl(235, 24%, 19%)",
          lightGrayishBlue1:"hsl(234, 39%, 85%)",
          lightGrayishBlue2: "hsl(236, 33%, 92%)",
          darkGrayishBlue: "hsl(234, 11%, 52%)",
          veryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
          veryDarkGrayishBlue2: " hsl(237, 14%, 26%)",
        }
      }
    },
  },
  plugins: [],
}