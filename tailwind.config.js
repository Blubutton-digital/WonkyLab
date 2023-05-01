/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        wonky: "#FFA928",
        bg: "#4D545D",
        dark: "#292929",
        darkbg: "#3A414B",
      },
      animation: {
        scroll: "20s scroll infinite linear",
      },
      backgroundImage: {
        banner: 'url("../public/Images/Banner-bg.png")',
      },
    },
  },
  plugins: [],
};
