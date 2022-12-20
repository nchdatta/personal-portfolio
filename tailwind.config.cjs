/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/js/*.js", "./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
