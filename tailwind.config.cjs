/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'hover-hover': { raw: '(hover: hover) and (pointer: fine)' },
      },
    },
  },
  safelist: [
    'hover-hover:hover:bg-white',
    'hover-hover:hover:text-slate-800',
    'hover-hover:hover:bg-green-800',
    'hover-hover:hover:bg-red-800',
    'hover-hover:hover:bg-yellow-800',
    'hover-hover:hover:text-white'
  ],
  plugins: [],
}
