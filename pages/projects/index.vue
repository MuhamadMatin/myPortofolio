<script setup>
  definePageMeta({
    layout: 'custom',
  });

  const projects = ref([
    {
      name: 'Diservisin',
      desk: 'A collaborative project between me and several friends aims to make digitalization of mobile phone counter inventory function as a replacement for manual service input recording into an inventory recording website, the website is designed to be used by 3 counters and will continue to grow to 17+ mobile phone counters.',
      image: 'private.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Laravel.svg', 'Jquery.svg', 'DBeaver.svg', 'MySQL.svg', 'TailwindCSS.svg'],
      url: '',
      code: '',
    },
    {
      name: 'Recipe Science',
      desk: 'I built Recipe Science, a book website, inspired by the lack of interest in reading around me. I built this website as a solution for those of you who want to enjoy books again, as well as an effort to revive interest in reading books and this project is open to anyone, I am happy to accept your input to continue developing this website and reach more readers out there.',
      image: 'science.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Laravel.svg', 'Livewire.svg', 'DBeaver.svg', 'MySQL.svg', 'TailwindCSS.svg'],
      url: '',
      code: 'https://github.com/MuhamadMatin/laravelBooks',
    },
    {
      name: 'Online Exam Laravel 11',
      desk: 'I built a Laravel 11 online exam which comes from Build With Angga or BWA. However, I am currently facing a challenge as I need additional funds to host and fully deploy this Laravel project.',
      image: 'exam.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Laravel.svg', 'DBeaver.svg', 'MySQL.svg', 'TailwindCSS.svg'],
      url: '',
      code: 'https://github.com/MuhamadMatin/BWAexamLaravel',
    },
    {
      name: 'Online Courses Laravel 11',
      desk: 'I built a Laravel 11 online course which comes from Build With Angga or BWA. However, I am currently facing a challenge as I need additional funds to host and fully deploy this Laravel project.',
      image: 'course.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Laravel.svg', 'DBeaver.svg', 'MySQL.svg', 'TailwindCSS.svg'],
      url: '',
      code: 'https://github.com/MuhamadMatin/BWAcourseLaravel',
    },
    {
      name: 'Remake Image Search',
      desk: 'I rebuilt the Image Search website using the Pexel API. I used several Nuxt modules such as Nuxt Google-Font, Nuxt Security, Nuxt Image, and TailwindCSS to provide a new web experience than before. This project is part of my efforts to improve my skills in web development.',
      image: 'image-remake.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Nuxt.svg', 'TailwindCSS.svg'],
      url: 'https://imagenuxt.netlify.app',
      code: 'https://github.com/MuhamadMatin/imageNuxt',
    },
    {
      name: 'Nuxt Blog',
      desk: 'I created a blog using the Nuxt Content from Nuxt.js as a means to learn the Nuxt module. The nuxt content is one of many modules available in Nuxt.js, a framework based on Vue.js. I can write my blog content using .md, .yml, .csv or .json. By creating this blog, I can improve my knowledge and skills about Nuxt.js and its modules.',
      image: 'blog.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Nuxt.svg', 'TailwindCSS.svg'],
      url: 'https://blogwithnuxt.netlify.app',
      code: 'https://github.com/MuhamadMatin/learnNuxtBlog',
    },
    {
      name: 'Nuxt Weather',
      desk: 'I created a simple weather website I created using framwrok Nuxt.',
      image: 'weather.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Nuxt.svg', 'TailwindCSS.svg'],
      url: 'https://weathernwithuxt.netlify.app',
      code: 'https://github.com/MuhamadMatin/weatherNuxt',
    },
    {
      name: 'Typing Game',
      desk: 'I created typing game, this game is designed to hone your finger skills and speed in an interactive way.',
      image: 'typing.webp',
      // svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      url: 'https://muhamadmatin.github.io/TypingText',
      code: 'https://github.com/MuhamadMatin/TypingText',
    },
    {
      name: 'Image Search With Unsplash API',
      desk: 'I created a website that displays various interesting photos from the Unsplash API. I used documentation provided by various sources to learn how to access and process data from the API.',
      image: 'image.webp',
      // svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      url: 'https://muhamadmatin.github.io/ImageSearch',
      code: 'https://github.com/MuhamadMatin/ImageSearch',
    },
    {
      name: 'Color Generate',
      desk: 'I created a color generator for inspiration and creativity and makes the color selection process easier for you.',
      image: 'color.webp',
      // svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      url: 'https://muhamadmatin.github.io/colorGenerate',
      code: 'https://github.com/MuhamadMatin/colorGenerate',
    },
    {
      name: 'Code Editor',
      desk: 'I created a simple code editor website that can be used by anyone and anywhere.',
      image: 'code.webp',
      // svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      url: 'https://muhamadmatin.github.io/CodeEditor',
      code: 'https://github.com/MuhamadMatin/CodeEditor',
    },
    {
      name: 'QR Generate',
      desk: 'I created a website that can generate QR codes from text and URLs using the API from https://goqr.me/api/. I leveraged the documentation available on the website to understand how to send requests and receive responses from the API.',
      image: 'qr.webp',
      // svg: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
      svg: ['HTML.svg', 'CSS.svg', 'JavaScript.svg'],
      url: 'https://muhamadmatin.github.io/GenerateQR',
      code: 'https://github.com/MuhamadMatin/GenerateQR',
    },
  ]);
</script>

<template>
  <NuxtLayout name="custom">
    <div v-for="project in projects" :key="project">
      <NuxtImg :src="`/images/projects/${project.image}`" alt="achievement image" :custom="true" v-slot="{ src, isLoaded, imgAttrs }">
        <img v-if="isLoaded" v-bind="imgAttrs" :src="src" class="w-full rounded-md" loading="lazy" />

        <div v-else class="w-full h-48 md:h-52 lg:h-64 rounded-md animate-pulse bg-[hsl(200,20%,70%)]" />
      </NuxtImg>
      <div>
        <div class="flex justify-between mt-2">
          <h1 class="text-xl font-semibold text-white transition-all duration-200 cursor-pointer hover:text-teal-300">
            {{ project.name }}
          </h1>
          <span class="flex gap-x-2 ms-3">
            <NuxtLink v-if="project.url" class="group" :to="`${project.url}`" target="blank">
              <Icon class="inline-block w-6 h-6 duration-100 group-hover:text-white" name="hugeicons:internet" />
            </NuxtLink>
            <NuxtLink v-if="project.code" class="group" :to="`${project.code}`" target="blank">
              <Icon class="inline-block w-6 h-6 duration-100 group-hover:text-white" name="mdi:github" />
            </NuxtLink>
          </span>
        </div>
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
    <div class="mx-auto md:grid md:col-span-2">
      <NuxtLink
        class="flex justify-center px-12 py-2 mb-5 space-x-2 text-sm font-medium align-middle duration-100 bg-gray-900 rounded-full cursor-pointer justify-items-center group lg:px-15 lg:py-4 hover:text-white hover:bg-gray-800 w-fit lg:text-base gap-x-1"
        to="/">
        <Icon class="inline-block w-5 h-5 duration-100 group-hover:text-teal-500 group-hover:-translate-x-2" name="pajamas:go-back" />
        All done, let's back
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
