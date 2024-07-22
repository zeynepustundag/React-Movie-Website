/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open:["Open Sans", "sans-serif"],
        playwrite:["Playwrite CU", "cursive"],
      },
      colors:{
        darkpink:"#DC0083",
      },
      container: {
        center: true,
      },
      spacing:{
        "128":"32rem",
      },
      screens:{
        mobile:"480px",
        sx:"320px",
      },
    },
  },
  plugins: [],
}

