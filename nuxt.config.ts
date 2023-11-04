// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:["assets/css/style.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'My Portofolio',
      charset: 'utf-8',
      meta: [],
      link: [],
    }
  },

  modules: ['@nuxtjs/tailwindcss'],
});
