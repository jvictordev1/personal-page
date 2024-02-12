/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "dark-mode": "url('/images/dark-mode-wallpaper.png')",
        "light-mode": "url('/images/light-mode-wallpaper.png')",
      },
      screens: {
        horizontal: { raw: "(max-height: 500px)" },
      },
    },
  },
  plugins: [],
};
