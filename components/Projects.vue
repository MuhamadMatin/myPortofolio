<template>
  <div class="mb-12" v-for="project in projects" :key="project">
    <NuxtImg class="h-full w-full rounded-md" loading="lazy" :src="`/images/${project.image}`" alt="image project" />
    <div>
      <h1 class="mt-2 w-fit text-xl md:mt-2.5 md:text-2xl text-white font-semibold hover:text-teal-300 duration-200">
        {{ project.name }}
      </h1>
      <p class="text-sm md:text-base">
        {{ project.desk }}
      </p>
      <div class="mt-1 flex justify-between items-center">
        <span class="flex space-x-2 relative">
          <span class="group relative" v-for="svg in project.svg" :key="svg">
            <!-- <div class="absolute z-10 -bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 hidden group-hover:block w-auto">
              <div class="bottom-full right-0 rounded-md bg-gray-900 px-4 py-1 text-xs text-white whitespace-nowrap">
                {{ svg.replace('.svg', '').replace(/-/, ' ') }}
                <svg class="absolute left-0 rotate-180 bottom-full h-2 w-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon points="0,0 127.5,127.5 255,0" /></svg>
              </div>
            </div> -->
            <!-- <NuxtImg class="w-6 h-6" :src="`/svg/${svg}`" alt="svg image" /> -->
            <Icon class="w-7 h-7" :name="`${svg}`" />
          </span>
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
      name: 'Remake Image Search',
      desk: 'I rebuilt the Image Search website using the Pexel API. I used several Nuxt modules such as Nuxt Google-Font, Nuxt Security, Nuxt Image, and TailwindCSS to provide a new web experience than before. This project is part of my efforts to improve my skills in web development.',
      image: 'image-remake.webp',
      svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      // svg: ['Nuxt.svg', 'Tailwind-CSS.svg', 'Nuxt-Security.svg'],
      URL: 'https://imagenuxt.netlify.app/',
    },
    {
      name: 'Nuxt Blog',
      desk: 'I created a blog using the Nuxt Content from Nuxt.js as a means to learn the Nuxt module. The nuxt content is one of many modules available in Nuxt.js, a framework based on Vue.js. I can write my blog content using .md, .yml, .csv or .json. By creating this blog, I can improve my knowledge and skills about Nuxt.js and its modules',
      image: 'blog.webp',
      svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      // svg: ['Nuxt.svg', 'Tailwind-CSS.svg'],
      URL: 'https://blogwithnuxt.netlify.app/',
    },
    {
      name: 'Nuxt Weather',
      desk: 'I created a simple weather website I created using framwrok Nuxt',
      image: 'weather.webp',
      svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      // svg: ['Nuxt.svg', 'Tailwind-CSS.svg'],
      URL: 'https://weathernwithuxt.netlify.app/',
    },
    {
      name: 'Typing Game',
      desk: 'I created typing game, this game is designed to hone your finger skills and speed in an interactive way',
      image: 'typing.webp',
      svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      // svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      URL: 'https://muhamadmatin.github.io/TypingText/',
    },
    {
      name: 'Image Search With Unsplash API',
      desk: 'I created a website that displays various interesting photos from the Unsplash API. I used documentation provided by various sources to learn how to access and process data from the API',
      image: 'image.webp',
      svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      // svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      URL: 'https://muhamadmatin.github.io/ImageSearch/',
    },
    {
      name: 'Color Generate',
      desk: 'I created a color generator for inspiration and creativity and makes the color selection process easier for you.',
      image: 'color.webp',
      svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      // svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      URL: 'https://muhamadmatin.github.io/colorGenerate/',
    },
    {
      name: 'QR Generate',
      desk: 'I created a website that can generate QR codes from text and URLs using the API from https://goqr.me/api/. I leveraged the documentation available on the website to understand how to send requests and receive responses from the API',
      image: 'qr.webp',
      svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      // svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      URL: 'https://muhamadmatin.github.io/GenerateQR/',
    },
  ]);
</script>
