/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          black: "#050505",
          dark: "#0a0a0a",
          red: "#ff0000",
          "red-glow": "#ff3333",
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px #ff0000, 0 0 10px #ff0000' },
          '100%': { 'box-shadow': '0 0 20px #ff0000, 0 0 30px #ff0000' },
        }
      }
    },
  },
  plugins: [],
}
