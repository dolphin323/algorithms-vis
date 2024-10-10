module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src/']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
