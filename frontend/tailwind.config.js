/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        startMenu: "url('../public/img/start-menu-bg.jpeg')",
        onigiri: "url('../public/img/onigiri.jpg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
