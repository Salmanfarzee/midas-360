// .eslintrc.js
export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-undef': 'error', // This will catch missing imports like HomePage
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
  },
};