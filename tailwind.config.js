/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        title: '#0b0a0a',
        base: '#403a3a',
        light: '#707070',
      },
      backgroundColor: {
        body: '#fcfcfc',
        container: '#fafafa',
        'container-alt': '#f0efef',
      }
    },
  },
  plugins: [],
}
