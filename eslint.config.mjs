import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    quotes: ["error", "double"],
    trailingComma: ["error", "all"],
  },
});
