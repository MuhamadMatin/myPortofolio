<script setup>
  const projects = ref([
    {
      name: 'Recipe Science',
      desk: 'I built Recipe Science, a book website, inspired by the lack of interest in reading around me. I built this website as a solution for those of you who want to enjoy books again, as well as an effort to revive interest in reading books and this project is open to anyone, I am happy to accept your input to continue developing this website and reach more readers out there.',
      image: 'science.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Laravel.svg', 'Livewire.svg', 'DBeaver.svg', 'MySQL.svg', 'TailwindCSS.svg'],
      URL: 'https://github.com/MuhamadMatin/laravelBooks',
    },
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
      URL: 'https://imagenuxt.netlify.app',
    },
    {
      name: 'Nuxt Blog',
      desk: 'I created a blog using the Nuxt Content from Nuxt.js as a means to learn the Nuxt module. The nuxt content is one of many modules available in Nuxt.js, a framework based on Vue.js. I can write my blog content using .md, .yml, .csv or .json. By creating this blog, I can improve my knowledge and skills about Nuxt.js and its modules.',
      image: 'blog.webp',
      // svg: ['logos:nuxt-icon', 'logos:tailwindcss-icon'],
      svg: ['Nuxt.svg', 'TailwindCSS.svg'],
      URL: 'https://blogwithnuxt.netlify.app',
    },
  ]);
</script>

<template>
  <div class="space-y-12">
    <div v-for="project in projects" :key="project">
      <NuxtImg :src="`/images/projects/${project.image}`" alt="achievement image" :custom="true" v-slot="{ src, isLoaded, imgAttrs }">
        <img v-if="isLoaded" v-bind="imgAttrs" :src="src" class="object-cover w-full bg-cover rounded-md md:h-48 lg:h-80" loading="lazy" />

        <div v-else class="w-full h-52 md:h-48 lg:h-80 rounded-md animate-pulse bg-[hsl(200,20%,70%)]" />
      </NuxtImg>
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
  </div>
  <NuxtLink class="flex flex-row items-center px-4 py-2 mx-auto my-5 space-x-2 text-sm font-medium duration-100 bg-gray-900 rounded-full cursor-pointer gap-x-1 md:py-3 md:px-6 hover:text-white hover:bg-gray-800 group w-fit" to="/projects">
    Let's see my projects
    <Icon class="inline-block w-6 h-6 duration-200 rotate-45 group-hover:text-teal-500 group-hover:translate-x-2" name="tabler:arrow-up-right" />
  </NuxtLink>
</template>
