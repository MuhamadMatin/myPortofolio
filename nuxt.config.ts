// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-icon', '@nuxtjs/sitemap', '@nuxtjs/seo'],
  ssr: true,

  site: {
    url: 'https://www.muhamadmatin.my.id',
    name: 'muhamad matin',
    description: "Explore Matin's portfolio. This is the first portfolio website created using Nuxt.js, showcasing skills in web development.",
    defaultLocale: 'en',
  },

  compatibilityDate: '2024-09-25',
});