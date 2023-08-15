// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthq/ui"],
  ssr: true,
  ui: {
    icons: ["solar", "carbon", "simple-icons", "skill-icons"],
  },
  // css: ["@/assets/css/main.css"],
  runtimeConfig: {
    apiSecret: process.env.mongoURI,
  },
});
