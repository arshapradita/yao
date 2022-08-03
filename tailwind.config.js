/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        sapro: "url('../public/sa-pro.png')",
        wepro: "url('../public/we_pro.png')",
      },
    },
  },
  plugins: [],
};
