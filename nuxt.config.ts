// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/ui"],

  app: {
    head: {
      title: "Sagar Joseph - Full Stack Developer",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    pageTransition: { name: "page", mode: "out-in", appear: true },
  },

  fonts: {
    families: [
      {
        name: "Victor Mono",
        provider: "google",
        weights: [400, 700],
      },
    ],
  },

  css: ["@/assets/css/main.css"],

  ui: {
    theme: {
      colors: ["primary", "secondary", "accent", "info", "success", "warning", "error"],
    },
  },
});
