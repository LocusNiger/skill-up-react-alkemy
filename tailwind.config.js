/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        killBill: "#f8ba00",
        midnight: "#121721",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
