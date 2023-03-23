/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C3333",
        secondary: "#2E4F4F",
        third: "#0E8388",
        fourth: "#CBE4DE"
      }
    },
  },
  plugins: [],
}