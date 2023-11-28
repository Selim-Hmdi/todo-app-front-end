/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  plugins: [
    '@stylistic/js'
  ],
  rules: {
    '@stylistic/js/indent': ['error', 2],
    '@stylistic/js/no-trailing-spaces': "error",
    '@stylistic/js/semi': ["error", "never"]
  },
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
