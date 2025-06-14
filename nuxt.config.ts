// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  modules: ["@nuxt/eslint", "@nuxt/test-utils"],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
});
