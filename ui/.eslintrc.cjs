module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'unused-imports', 'perfectionist'],
  rules: {
    'no-console': "warn",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "prettier/prettier": ["error", {
      endOfLine: 'auto'
    }],
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
      "warn",
			{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
		],
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
  },
}
