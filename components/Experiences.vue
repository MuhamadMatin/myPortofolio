<template>
  <div>
    <div class="mb-10" v-for="experience in experiences" :key="experience">
      <header class="text-xl font-bold text-white">{{ experience.position }}</header>
      <h2 class="text-white">{{ experience.place }}</h2>
      <h3 class="text-sm text-white">{{ experience.since }}</h3>
      <p class="my-3 lg:my-2.5">
        {{ experience.content }}
      </p>
      <div class="flex flex-wrap gap-3 mt-2">
        <span class="flex flex-row items-center px-4 py-2 text-sm font-medium duration-100 bg-gray-900 rounded-full cursor-pointer gap-x-1 md:py-2 md:px-5 hover:text-white hover:bg-gray-800" v-for="icon in experience.languages" :key="icon">
          <img loading="lazy" class="w-6 h-6" :src="`svg/${icon}`" alt="icon svg" />
          <p>{{ icon.replace('.svg', '') }}</p>
        </span>
        <!-- <p v-for="language in experience.language" :key="language" class="px-2 py-3 text-white bg-gray-900 rounded-md">{{ language }}</p> -->
        <!-- <Icon class="w-6 h-6" v-for="language in experience.languages" :key="language" :name="`${language}`" /> -->
      </div>
    </div>
    <div v-for="exps in all" :key="exps">
      <p>What do I use to build websites</p>
      <!-- <p v-for="language in exp.language" :key="language" class="px-2 py-3 text-white bg-gray-900 rounded-md">{{ language }}</p> -->
      <div class="flex flex-wrap gap-3 mt-3">
        <span class="flex flex-row items-center px-4 py-2 text-sm font-medium duration-100 bg-gray-900 rounded-full cursor-pointer gap-x-1 md:py-2 md:px-5 hover:text-white hover:bg-gray-800" v-for="icon in exps.languages.icons" :key="icon">
          <img loading="lazy" class="w-6 h-6" :src="`svg/${icon}`" alt="icon svg" />
          <p>{{ icon.replace('.svg', '') }}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  const experiences = ref([
    {
      since: 'Jul 2024 — Present',
      position: 'Full Stack Developer',
      place: 'Samagaha Creative Digital',
      content: 'practicing all the things I learned from vocational school and learning many new things such as FIlamentphp, Laravel Jetstream, Laravel Breeze, etc.',
      // languages: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript', 'logos:php', 'logos:laravel', 'logos:java', 'logos:flutter'],
      languages: ['Laravel.svg', 'MySQL.svg', 'TailwindCSS.svg', 'DBeaver.svg'],
    },
    {
      since: 'Jun 2021 — Jun 2024',
      position: 'Student at vocational school',
      place: 'SMK 17 Agustus 1945 Surabaya',
      content:
        'Learning about basic concepts, syntax, and logic of programming languages such as PHP, Java, JavaScript, and others. Also learned about how to apply these programming languages to create applications, web and other projects. I hope that by studying at this vocational school, I can develop my potential and interest in the field of programming.',
      // languages: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript', 'logos:php', 'logos:laravel', 'logos:java', 'logos:flutter'],
      languages: ['HTML.svg', 'CSS.svg', 'JavaScript.svg', 'PHP.svg', 'Laravel.svg', 'MySQL.svg', 'Java.svg', 'Flutter.svg'],
    },
    {
      since: 'Jan 2023 — Apr 2023',
      position: 'Internship Frond-End Developer',
      place: 'PT Redbuzz Mediatama',
      content: 'Learned how to properly use several libraries and frameworks such as jQuery Vue, Nuxt, Bootstrap for Front-End developers.',
      // languages: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript', 'logos:jquery', 'logos:bootstrap', 'logos:vue', 'logos:nuxt-icon'],
      languages: ['HTML.svg', 'CSS.svg', 'JavaScript.svg', 'Jquery.svg', 'Bootstrap.svg', 'Vue.svg', 'Nuxt.svg'],
    },
  ]);
  const all = ref([
    {
      languages: {
        icons: ['HTML.svg', 'CSS.svg', 'Javascript.svg', 'Bootstrap.svg', 'TailwindCSS.svg', 'Vue.svg', 'Nuxt.svg', 'PHP.svg', 'Laravel.svg', 'MySQL.svg', 'VSCode.svg'],
        // texts: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'TailwindCSS', 'Vue', 'Nuxt', 'PHP', 'Lavavel'],
      },
    },
  ]);
</script>
