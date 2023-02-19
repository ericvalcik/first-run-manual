/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'base-orange': '#F16524',
        'base-red': '#C51F30'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
