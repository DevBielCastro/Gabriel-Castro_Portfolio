/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#030208',
        'primary': '#3C3C4E',
        'secondary': '#9CA8CA',
        'accent': '#E76C0A',
      }
    },
  },
  plugins: [],
}