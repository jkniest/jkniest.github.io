import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/ui',
    '@therealironduck/ducktory',
  ],

  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
  ],
  compatibilityDate: '2025-07-15',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  ducktory: {
    debug: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
