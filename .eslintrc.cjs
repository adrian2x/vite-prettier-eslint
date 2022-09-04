module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  plugins: ['react', 'baseui'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'baseui/deprecated-component-api': 'warn',
    'baseui/deprecated-theme-api': 'warn',
    'baseui/no-deep-imports': 'warn',
    'sort-keys': ['error', 'asc', {
      caseSensitive: true,
      minKeys: 2,
      natural: false
    }]
  }
}
