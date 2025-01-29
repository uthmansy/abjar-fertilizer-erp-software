/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#aaa26e",
        primaryDark: "#716a42",
        primaryLight: "#e3e0cf",
        secondary: "#cd9b34",
        bg: "#d0cbaf",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
