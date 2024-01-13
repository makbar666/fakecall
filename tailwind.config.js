/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chatLeft: '#363638',
        chatRight: '#005045',
        primary: '#776B5D',
        secondary: '#B0A695',
        tertiary: '#EBE3D5',
        accent: '#F3EEEA',
      },
    },
  },
  plugins: [],
}

