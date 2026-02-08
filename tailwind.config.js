/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'soft': '8px 8px 16px #d1d1cf, -8px -8px 16px #ffffff',
        'soft-hover': '10px 10px 20px #d1d1cf, -10px -10px 20px #ffffff, inset 0 0 0 2px #d1d1cf',
        'soft-active': 'inset 6px 6px 12px #d1d1cf, inset -6px -6px 12px #ffffff',
      },
      colors: {
        stone: {
          50: '#F8FAF5', // Warmer custom beige
        }
      }
    },
  },
  plugins: [],
}
