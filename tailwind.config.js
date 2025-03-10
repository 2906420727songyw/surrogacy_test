/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'header-switch': '900px',
        fontFamily: {
          sans: ['思源黑体', 'sans-serif'],
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}