module.exports = {
  purge: [
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: '#011c55',
        linkedin: '#0077B5'
      },
      backgroundColor: {
        primary: '#011c55'
      },
      backgroundImage: theme => ({
        'hero-img': 'url("../hero.jpg")'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
