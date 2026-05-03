import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  files: ['**/*.{js,ts,jsx,tsx}'],
  ignores: ['dist', 'node_modules', 'coverage', 'build'],
  extends: [js.configs.recommended],
  languageOptions: {
    ecmaVersion: 2022,
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
})