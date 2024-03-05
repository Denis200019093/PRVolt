module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "@wemake-services/typescript/recommended",
    "@wemake-services/typescript/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        suffix: ["Type"],
      },
    ],

    "@typescript-eslint/no-this-alias": ["error", { allowDestructuring: true }],

    // design
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/unified-signatures": "error",

    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
  },
};
