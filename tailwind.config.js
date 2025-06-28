/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#046307',         // Deep forest green (unchanged)
        goldCardBg: '#FFF3B0',      // Soft, elegant pastel gold
        tertiary: '#A5D6A7',        // Light desaturated green, harmonizes with primary
        textcolor: "#FFFFFF",       // Clean white text
        greenBg: "#0B2E0C",         // Slightly darker green background for better contrast
        greenCardBg: "#1C7430"      // Balanced, rich green for card backgrounds
      }
    },
  },
  plugins: [],
}
