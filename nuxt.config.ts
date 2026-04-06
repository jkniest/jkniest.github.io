import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxt/icon", "@nuxt/ui", "@therealironduck/ducktory"],

  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],
  compatibilityDate: "2025-07-15",

  vite: {
    plugins: [tailwindcss()],
  },

  ducktory: {
    debug: true,
  },

  future: {
    compatibilityVersion: 5,
  },

  experimental: {
    viewTransition: true,
    normalizeComponentNames: true,
    alwaysRunFetchOnKeyChange: true,
    asyncContext: true,
    asyncEntry: true,
    extractAsyncDataHandlers: true,
    enforceModuleCompatibility: true,
    inlineRouteRules: true,
    crossOriginPrefetch: true,
    writeEarlyHints: true,
    typedPages: true,
  },
});
