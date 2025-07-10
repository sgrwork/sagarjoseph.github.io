// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/ui"],

  icon: {
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 256,
      icons: [
        "solar:arrow-right-up-broken",
        "material-symbols-download",
        "i-lucide-arrow-right",
        "i-lucide-briefcase",
        "i-lucide-user",
        "i-lucide-mail",
        "i-lucide-menu",
        "mingcute:home-1-fill",
        "mingcute:arrow-right-fill",
        "material-icon-theme:quasar",
        "material-icon-theme:vue",
        "material-icon-theme:nodejs",
        "material-icon-theme:database",
      ],
    },
  },

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
