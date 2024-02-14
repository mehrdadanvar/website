// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "@nuxt/content"],
  ui: {
    icons: ["solar", "carbon", "simple-icons", "skill-icons", "ph"],
  },
  googleFonts: {
    families: {
      Roboto: true,
      Lato: [100, 300],
      "Open+Sans": true,
    },
  },
  runtimeConfig: {
    apiSecret: process.env.mongoURI,
  },
  nitro: {
    static: true,
  },
  content: {
    highlight: {
      theme: "github-light",
    },
  },
});
