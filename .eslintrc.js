module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    "linebreak-style": 0,
    "max-len" : 0,
    // "arrow-body-style" : 0,
    "semi": 0,
    "class-methods-use-this": 0,
    "react/no-unescaped-entities": 0
  },
  'globals': {
    "fetch": false
  }
}
