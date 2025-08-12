// eslint.config.js（ルート：Flat Config 最小）
import js from "@eslint/js";
import tseslint from "typescript-eslint";
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { rules: { "no-unused-vars": "warn" } },
];
