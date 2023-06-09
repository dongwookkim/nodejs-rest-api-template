module.exports = {
  root: true,

  env: {
    node: true,
  },

  plugins: ['prettier'],
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
};
