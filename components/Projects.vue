<template>
  <div class="mb-12" v-for="project in projects" :key="project">
    <NuxtImg class="w-full h-full rounded-md" loading="lazy" :src="`/images/${project.image}`" alt="image project" />
    <div>
      <NuxtLink class="flex items-center mt-2 md:mt-2.5 space-x-2 w-fit group" :to="`${project.URL}`" target="blank">
        <h1 class="text-xl font-semibold text-white transition-all duration-200 md:text-2xl group-hover:text-teal-300">
          {{ project.name }}
        </h1>
        <span class="inline-block duration-100 group-hover:-translate-y-2 group-hover:translate-x-1">
          <img loading="lazy" class="w-6 h-6" :src="`/svg/rocket.svg`" alt="rocket svg" />
        </span>
      </NuxtLink>
      <p class="text-sm md:text-base">
        {{ project.desk }}
      </p>
      <div class="flex flex-wrap gap-3 mt-2">
        <span class="flex flex-row items-center px-4 py-2 text-sm font-medium duration-100 bg-gray-900 rounded-full cursor-pointer gap-x-1 md:py-2 md:px-5 hover:text-white hover:bg-gray-800" v-for="svg in project.svg" :key="svg">
          <img loading="lazy" class="w-6 h-6" :src="`/svg/${svg}`" alt="icon svg" />
          <p>{{ svg.replace('.svg', '') }}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  const projects = ref([
    {
      name: 'Online Exam Laravel 11',
      desk: 'I built a Laravel 11 online exam which comes from Build With Angga or BWA. However, I am currently facing a challenge as I need additional funds to host and fully deploy this Laravel project.',
      image: 'exam.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Laravel.svg', 'DBeaver.svg', 'MySQL.svg', 'TailwindCSS.svg'],
      URL: 'https://github.com/MuhamadMatin/BWAexamLaravel',
    },
    {
      name: 'Online Courses Laravel 11',
      desk: 'I built a Laravel 11 online course which comes from Build With Angga or BWA. However, I am currently facing a challenge as I need additional funds to host and fully deploy this Laravel project.',
      image: 'course.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Laravel.svg', 'DBeaver.svg', 'MySQL.svg', 'TailwindCSS.svg'],
      URL: 'https://github.com/MuhamadMatin/BWAcourseLaravel',
    },
    {
      name: 'Remake Image Search',
      desk: 'I rebuilt the Image Search website using the Pexel API. I used several Nuxt modules such as Nuxt Google-Font, Nuxt Security, Nuxt Image, and TailwindCSS to provide a new web experience than before. This project is part of my efforts to improve my skills in web development.',
      image: 'image-remake.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Nuxt.svg', 'TailwindCSS.svg'],
      URL: 'https://imagenuxt.netlify.app/',
    },
    {
      name: 'Nuxt Blog',
      desk: 'I created a blog using the Nuxt Content from Nuxt.js as a means to learn the Nuxt module. The nuxt content is one of many modules available in Nuxt.js, a framework based on Vue.js. I can write my blog content using .md, .yml, .csv or .json. By creating this blog, I can improve my knowledge and skills about Nuxt.js and its modules.',
      image: 'blog.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Nuxt.svg', 'TailwindCSS.svg'],
      URL: 'https://blogwithnuxt.netlify.app/',
    },
    {
      name: 'Nuxt Weather',
      desk: 'I created a simple weather website I created using framwrok Nuxt.',
      image: 'weather.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Nuxt.svg', 'TailwindCSS.svg'],
      URL: 'https://weathernwithuxt.netlify.app/',
    },
    {
      name: 'Typing Game',
      desk: 'I created typing game, this game is designed to hone your finger skills and speed in an interactive way.',
      image: 'typing.webp',
      // svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      URL: 'https://muhamadmatin.github.io/TypingText/',
    },
    {
      name: 'Image Search With Unsplash API',
      desk: 'I created a website that displays various interesting photos from the Unsplash API. I used documentation provided by various sources to learn how to access and process data from the API.',
      image: 'image.webp',
      // svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      URL: 'https://muhamadmatin.github.io/ImageSearch/',
    },
    {
      name: 'Color Generate',
      desk: 'I created a color generator for inspiration and creativity and makes the color selection process easier for you.',
      image: 'color.webp',
      // svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      URL: 'https://muhamadmatin.github.io/colorGenerate/',
    },
    {
      name: 'Code Editor',
      desk: 'I created a simple code editor website that can be used by anyone and anywhere.',
      image: 'code.webp',
      // svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      URL: 'https://muhamadmatin.github.io/CodeEditor/',
    },
    {
      name: 'QR Generate',
      desk: 'I created a website that can generate QR codes from text and URLs using the API from https://goqr.me/api/. I leveraged the documentation available on the website to understand how to send requests and receive responses from the API.',
      image: 'qr.webp',
      // svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      URL: 'https://muhamadmatin.github.io/GenerateQR/',
    },
  ]);
</script>
