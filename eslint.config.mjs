// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt().override(
  // Your custom configs here
  "*.vue", // specify the name of the target config, or index
  {
    rules: {
      // ...override the rules
      "vue/html-self-closing": "off",
    },
  }
);
