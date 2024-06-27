/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-bg": "#252836",
        "dark-bg": "#1F1D2B",
        "base-dark-line": "#393C49",
        "base-form-bg": "#2D303E",
        "primary-color": "#EA7C69",
        "text-light": "#ABBBC2",
      },
      boxShadow: {
        "btn-shadow": "0px 8px 24px 0px rgba(234, 124, 105, 0.32);",
      },
    },
  },
  plugins: [],
};
