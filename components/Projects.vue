<template>
  <div class="mb-12" v-for="project in projects" :key="project">
    <img class="h-full w-full rounded-md" loading="lazy" :src="`/images/${project.image}`" alt="image project" />
    <div>
      <h1 class="mt-1.5 w-fit md:text-lg text-white font-semibold hover:text-teal-300 duration-200">
        {{ project.name }}
      </h1>
      <p class="text-sm md:text-base">
        {{ project.desk }}
      </p>
      <div class="mt-2 flex justify-between items-center">
        <span class="flex space-x-2">
          <img v-for="svg in project.svg" :key="svg" class="w-6 h-6" :src="`/svg/${svg}`" alt="svg image" />
        </span>
        <NuxtLink :to="`${project.URL}`" target="blank" class="group py-2 md:py-2.5 px-4 md:px-5 bg-gray-900 text-sm duration-100 font-medium rounded-full text-gray-400 border-0 hover:text-white hover:bg-gray-700">
          <span class="inline-block duration-100 group-hover:-translate-y-1 group-hover:translate-x-1">🚀</span> Click rocket
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const projects = ref([
    {
      name: 'Image Search with Pexel API',
      desk: 'I rebuilt the Image Search website using the Pexel API. I used several Nuxt modules such as Nuxt Google-Font, Nuxt Security, Nuxt Image, and TailwindCSS to provide a new web experience than before. This project is part of my efforts to improve my skills in web development.',
      image: 'image-remake.webp',
      svg: ['nuxt.svg', 'tailwind-css.svg', 'nuxt-security.svg'],
      URL: 'https://imagenuxt.netlify.app/',
    },
    {
      name: 'Nuxt blog',
      desk: 'I created a blog using the Nuxt Content from Nuxt.js as a means to learn the Nuxt module. The nuxt content is one of many modules available in Nuxt.js, a framework based on Vue.js. I can write my blog content using .md, .yml, .csv or .json. By creating this blog, I can improve my knowledge and skills about Nuxt.js and its modules',
      image: 'blog.webp',
      svg: ['nuxt.svg', 'tailwind-css.svg'],
      URL: 'https://blogwithnuxt.netlify.app/',
    },
    {
      name: 'Typing game',
      desk: 'I created typing game, this game is designed to hone your finger skills and speed in an interactive way',
      image: 'typing.webp',
      svg: ['html.svg', 'css.svg', 'js.svg'],
      URL: 'https://metallyleopart.github.io/TypingText/',
    },
    {
      name: 'Image Search with Unsplash API',
      desk: 'I created a website that displays various interesting photos from the Unsplash API. I used documentation provided by various sources to learn how to access and process data from the API',
      image: 'image.webp',
      svg: ['html.svg', 'css.svg', 'js.svg'],
      URL: 'https://metallyleopart.github.io/ImageSearch/',
    },
    {
      name: 'Color Generate',
      desk: 'I created a color generator for inspiration and creativity and makes the color selection process easier for you.',
      image: 'color.webp',
      svg: ['html.svg', 'css.svg', 'js.svg'],
      URL: 'https://metallyleopart.github.io/colorGenerate/',
    },
    {
      name: 'Quiz web',
      desk: 'I created a quiz website that can test users knowledge and insight on various topics. I use web technologies such as HTML, CSS, and JavaScript to create interactive and responsive interfaces',
      image: 'quiz.webp',
      svg: ['html.svg', 'css.svg', 'js.svg'],
      URL: 'https://metallyleopart.github.io/Question/',
    },
    {
      name: 'QR Generate',
      desk: 'I created a website that can generate QR codes from text and URLs using the API from https://goqr.me/api/. I leveraged the documentation available on the website to understand how to send requests and receive responses from the API',
      image: 'qr.webp',
      svg: ['html.svg', 'css.svg', 'js.svg'],
      URL: 'https://metallyleopart.github.io/GenerateQR/',
    },
  ]);
</script>
