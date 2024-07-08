/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        btn: "#01204E ",
        typo: "#000A19 ",
        background: "#E6F0FF",
        cardBg: "#8080801A"
      },
      fontFamily: {
        main: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        brand: ['DM Serif Text', 'sans-serif'],
      },
      screens: {
      sm: '720px',
    },
},
  },
  plugins: [],
}

