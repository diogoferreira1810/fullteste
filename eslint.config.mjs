import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    extends: ['next'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'layout.tsx',
      'page.tsx',
      'app/**/layout.tsx',
    ],
  },
  {
    rules: {
      // Error Prevention
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-var': 'error',

      // Best Practices
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      'no-console': 'warn',

      // Style Consistency
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],

      // Modern JavaScript
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': 'error',
    },
  },
];

export default eslintConfig;
