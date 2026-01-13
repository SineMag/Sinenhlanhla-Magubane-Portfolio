/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        gray: {
          light: "#f5f5f5",
          DEFAULT: "#333333",
          dark: "#000000",
        },
      },
    },
  },
  plugins: [],
};
