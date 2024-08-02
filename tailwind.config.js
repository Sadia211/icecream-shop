/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: "'Pacifico', cursive",
      },
      colors: {
        coral: '#800080',
      },
    },
  },
  plugins: [require("daisyui")],
}
