/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        "light-navy": "#112240",
        slate: {
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },
        cyan: "#64ffda",
        "blue-light": "#f0f5f9", // Light mode background
        "blue-dark": "#1e293b", // Light mode text
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Montserrat", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
