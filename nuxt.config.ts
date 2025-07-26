export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@therealironduck/ducktory',
  ],

  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',

  ducktory: {
    debug: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
