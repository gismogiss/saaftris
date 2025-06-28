/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1e3a8a",
        orange: "#f97316",
        white: "#ffffff",
      },
      fontFamily: {
        lato: ["Lato", "Inter", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
