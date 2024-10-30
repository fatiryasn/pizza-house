/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        quicksand: 'Quicksand',
        poppins: ['"Poppins"', 'sans-serif'],
        playwrite: ["'Playwrite GB S'", 'serif']
      }
    },
  },
  plugins: [],
}