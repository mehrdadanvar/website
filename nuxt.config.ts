// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthq/ui"],
  ssr: true,
  ui: {
    icons: ["solar", "carbon"],
  },
  // css: ["@/assets/css/main.css"],
});
