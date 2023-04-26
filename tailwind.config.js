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
      },
      animation: {
        scroll: "5s slide infinite linear",
      },
      keyframes: {
        infinite: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        banner: 'url("../public/Images/Banner-bg.png")',
      },
    },
  },
  plugins: [],
};
