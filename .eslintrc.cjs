module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@typescript-eslint", "@stylistic/ts"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "space-before-blocks": "off",
    "@stylistic/ts/space-before-blocks": "error",
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": "error",
    "@stylistic/ts/padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: ["interface", "type"], next: "*"},
    ]
  },
};
