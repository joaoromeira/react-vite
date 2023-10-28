module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    "@typescript-eslint",
    "react-hooks",
    "eslint-plugin-import",
    "prettier",
    "eslint-plugin-import-helpers",
    "eslint-plugin-react-hooks",
    "jsx-a11y"
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true
      },
    ],
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": "off",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          "/^react$/",
          "/^styled-components$/",
          "module",
          ["parent", "sibling", "index"]
        ],
        "alphabetize": {
          "order": "asc",
          "ignoreCase": true
        }
      }
    ]
  },
}