export default defineNuxtConfig({
  app: {
    baseURL: '/Kolomenskoe/',   // имя репозитория, со слэшем
  },
  nitro: {
    preset: 'github-pages',
  },
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true }
})
