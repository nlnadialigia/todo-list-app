import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['src/**/*.tsx'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'error',
      // 'quotes': ['error', 'single', { 'avoidEscape': true }],
      // 'max-len': [1, { 'code': 120 }],
      // 'no-inline-comments': 'error',
      // '@typescript-eslint/naming-convention': [
      //   'error',
      //   {
      //     'selector': 'variable',
      //     'format': ['camelCase', 'PascalCase']
      //   }
      // ],
    }
  },
  {
    ignores: [
      'src/styles/**/*',
    ]
  }
];