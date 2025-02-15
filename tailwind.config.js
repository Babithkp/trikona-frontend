/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        primary:'#FF6B1C',
        secondary:'#B3B3B3',
      }
    },
  },
  plugins: [],
}