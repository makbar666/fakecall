/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chatLeft: '#363638',
        chatRight: '#005045',
        secondary: '#5C9A95'
      },
    },
  },
  plugins: [],
}

