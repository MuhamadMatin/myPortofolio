// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-icon', '@nuxtjs/sitemap'],

  ssr: true,

  site: {
    url: 'https://www.muhamadmatin.my.id',
    name: 'Muhamad Matin Portfolio',
  },
});
