module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/prop-types": 0,
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [1,
      {
        'maximum': 1
      }
    ],
    "react/jsx-sort-props": [1, {
      "callbacksLast": true,
      "shorthandFirst": false,
      "shorthandLast": true,
      "multiline": "last",
      "ignoreCase": false,
      "noSortAlphabetically": false,
      "reservedFirst": true,
    }]
  }
};
