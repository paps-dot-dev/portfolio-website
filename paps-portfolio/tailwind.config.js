/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        darkHero: "url('./assets/darkbg.jpg')",
        lightHero: "url('./assets/lightbg.jpg')",
      },
    },
  },
  plugins: [],
}
