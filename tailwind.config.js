/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#425c59",
        primaryDark: "#3d5653",
        secondary: "#cd9b34",
        bg: "#fffdf1",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
