// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/sitemap"],

  site: {
    url: "https://exthub.dev",
  },

  nitro: {
    preset: "vercel",
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/pickperfect",
        "/pickperfect/policy",
        "/locatex",
        "/locatex/policy",
      ],
    },
  },

  routeRules: {
    "/pickperfect": { prerender: true },
    "/pickperfect/policy": { prerender: true },
    "/locatex": { prerender: true },
    "/locatex/policy": { prerender: true },
  },

  colorMode: {
    preference: "light",
    fallback: "light",
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-01-15",
});
