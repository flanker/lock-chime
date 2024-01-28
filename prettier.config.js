module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  semi: false,
  arrowParens: 'avoid',
  printWidth: 120,
  overrides: [
    {
      files: ['*.js'],
      processor: '@graphql-eslint/graphql',
      extends: ['plugin:prettier/recommended'],
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ],
}
