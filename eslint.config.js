import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config'} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: parser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],

    plugins: [
      pluginReact,
      tseslint,
    ],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'error',
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
    },
  },
];