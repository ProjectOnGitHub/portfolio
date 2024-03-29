module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [
      2,
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-sort-props': [1, {
      callbacksLast: true,
      shorthandFirst: false,
      shorthandLast: true,
      multiline: 'last',
      ignoreCase: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    }],
    'react/jsx-curly-newline': [2, { multiline: 'consistent', singleline: 'consistent' }],
  },
};
