/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          primary: '#7B4AE2',
          primaryDark: '#6C2BD9',
          accent: '#A566FF',
          info: '#00B9F1',
          success: '#14C784',
          warning: '#F9CF57',
          textPrimary: '#000000',
          textSecondary: '#6B6B6B',
          background: '#F9F9FB'
        }
    },
  },
  plugins: [],
}
