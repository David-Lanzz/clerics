/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#092e09',      // Dark Green (Equivalent to the original #503420)
        secondary: '#eaeaea',    // Light Green (Equivalent to the original #EFE9DB)
        tertiary: '#8FBC8F'      // Medium Green (Equivalent to the original #E7BA92)
    }
    
    },
  },
  plugins: [],
}