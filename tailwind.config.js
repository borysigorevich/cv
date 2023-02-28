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
        'title-dark': '#f2f2f2',
        base: '#403a3a',
        'base-dark': '#bfbfbf',
        light: '#707070',
      },
      backgroundColor: {
        body: '#fcfcfc',
        'body-dark': '#2b2b2b',
        container: '#fafafa',
        'container-dark': '#212121',
        'container-alt': '#f0efef',
        'container-alt-dark': '#181616',
        'before-dark': '#bfbfbf'
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      }
    },

  },
  plugins: [],
}
