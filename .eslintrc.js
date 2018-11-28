module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [2, { 'props': false }],
    'no-shadow': ['off'],
    'import/no-unresolved': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-unused-vars': ['error', { 'args': 'none' }],
    'consistent-return': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-syntax': ['error', 'BinaryExpression[operator="in"]'],
    'vue/no-unused-components': ['off'],
    'vue/valid-v-bind': ['off'],
    'vue/no-use-v-if-with-v-for': ['off'],
    'no-template-curly-in-string': ['off'],
    'camelcase': ['off'],
    "no-underscore-dangle": ['off'], 
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
