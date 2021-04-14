module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.lint.json",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      files: ["*.test.ts", "__acceptance__/**", "__smoke__/**"],
      rules: {
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/camelcase": 0,
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-floating-promises": 2,
  },
};
