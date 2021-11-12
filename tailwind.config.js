module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aqua: '#61fae6',
      },
      backgroundImage: {
        'home-background': "url('./images/background-mbti3.jpg')"
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
        changa: ['Changa', 'sans-serif'],
        staat: ['Staatliches', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
