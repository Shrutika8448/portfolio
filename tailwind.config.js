/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        olive: {
          dark: "#3F4E1F",
          DEFAULT: "#6B7A2F",
          soft: "#8C9B40",
          accent: "#B7C667",
        },
        offwhite: {
          light: "#F7F4EB",
          DEFAULT: "#EEE8DA",
          deep: "#DDD2BD",
        },
      },
    },
  },
  plugins: [],
}
