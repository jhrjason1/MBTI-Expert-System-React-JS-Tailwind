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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
