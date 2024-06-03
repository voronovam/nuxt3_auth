// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
  ],
  pinia: {
    storesDirs: ['./store/**'],
    autoImports: ['defineStore'],
  },
  imports: {
    dirs: ['./store'],
  }
})
