/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        "green-light": "#3F9065",
        "green-dark": "#072F25",
        "red-main": "#EB1400",
        "orange-main": "#FF9924",
        "yellow-main": "#F1C40F",
      },
      fontFamily: {
        almarai: ["Almarai", "sans-serif"],
      },
    },
  },
  plugins: [],
};
