// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/style.css"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "pl",
      },
    },
  },
});
