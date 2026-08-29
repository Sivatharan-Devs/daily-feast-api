module.exports = {
  env: {
    node: true,
    es2022: true,
  },

  extends: ['airbnb-base', 'plugin:prettier/recommended'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['prettier'],

  rules: {
    // Prettier
    'prettier/prettier': 'error',

    // Node.js
    'no-console': 'off',

    // MongoDB / Mongoose commonly uses _id
    'no-underscore-dangle': 'off',

    // Allow async functions that don't always need await
    'require-await': 'off',

    // ESM project
    'import/extensions': 'off',

    // Don't require dependencies to be imported in a specific way
    'import/no-extraneous-dependencies': 'off',
  },
};
