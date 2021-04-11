// eslint-disable-next-line import/no-commonjs
module.exports = {
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  env: { jest: true, node: true, es6: true },
  plugins: ['prettier', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['node_modules', 'dist'],
  rules: {
    'import/extensions': ['error', 'always'],
    'import/no-commonjs': 'error',
    'jest/expect-expect': [1, { assertFunctionNames: ['expect*'] }],
  },
  overrides: [
    {
      files: ['core.d.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: { object: false },
            extendDefaults: true,
          },
        ],
      },
    },
  ],
}
