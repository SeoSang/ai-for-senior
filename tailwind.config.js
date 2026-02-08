/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // Elegant, subtle lift
        'soft-hover': '0 10px 25px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'soft-active': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)', // Delicate border + shadow
      },
      colors: {
        stone: {
          50: '#F9FAFB', // Cool-warm white
          100: '#F3F4F6', // Layering
          200: '#E5E7EB', // Borders
        },
        emerald: {
          800: '#064E3B', // Deep Luxury Green
          900: '#022C22', // Almost Black Green
        },
        amber: {
          100: '#FEF3C7', // Soft Gold Highlight
          400: '#FBBF24', // Gold Accent
        }
      },
      fontFamily: {
        serif: ['"Noto Serif KR"', 'serif'],
        sans: ['"Noto Sans KR"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
