/** @type {import('tailwindcss').Config} */

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    50: "#F9F9F2",
    100: "#F2F2E9",
    200: "#E9E9D8",
    300: "#D8D8C3",
    400: "#BFBF9E",
    500: "#A6A67D",
    600: "#8C8C5C",
    700: "#73733B",
    800: "#595919",
    900: "#3F3F00",
  },
  green: {
    50: "#F9F9F2",
    100: "#DAEED9",
    500: "#003D3B",
  },
  orange: {
    500: "#FF6340",
  },
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        body: "0.875rem",
        "body-sm": "1.125rem",
        h1: "2rem",
        "h1-sm": "3rem",
        h2: "1.125rem",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        widest: ".2em",
      },
      colors,
    },
  },
  plugins: [],
};
