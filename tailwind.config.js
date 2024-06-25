/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-bg": "#2D303E",
        "dark-bg": "#1F1D2B",
      },
      boxShadow: {
        "btn-shadow": "0px 8px 24px 0px rgba(234, 124, 105, 0.32);",
      },
    },
  },
  plugins: [],
};
