module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      sm: '600px',
      md: '950px',
      lg: '1200px',
    },
    extend: {
      flex: {
        '0.75': '0.75 0.75 0%'
      }
    },
  },
  plugins: [],
  purge: ['./app/**/*.hbs'],
};
