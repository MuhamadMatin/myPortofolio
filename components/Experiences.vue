<template>
  <div>
    <div class="mb-10" v-for="experience in experiences" :key="experience">
      <header class="text-white font-bold text-xl">{{ experience.position }}</header>
      <h2 class="text-white">{{ experience.place }}</h2>
      <h3 class="text-white text-sm mb-2.5">{{ experience.since }}</h3>
      <p>
        {{ experience.content }}
      </p>
      <div class="mt-2 flex flex-wrap gap-3">
        <span class="flex items-center flex-row gap-x-1 py-2 md:py-2 px-4 md:px-5 bg-gray-900 text-sm duration-100 font-medium rounded-full hover:text-white hover:bg-gray-800" v-for="icon in experience.languages" :key="icon">
          <img loading="lazy" class="h-6 w-6" :src="`svg/${icon}`" alt="icon svg"/>
          <p>{{ icon.replace('.svg', '') }}</p>
        </span>
        <!-- <p v-for="language in experience.language" :key="language" class="bg-gray-900 px-2 py-3 text-white rounded-md">{{ language }}</p> -->
        <!-- <Icon class="w-6 h-6" v-for="language in experience.languages" :key="language" :name="`${language}`" /> -->
      </div>
    </div>
    <div v-for="exps in all" :key="exps">
      <p>Programming tools that I use</p>
      <!-- <p v-for="language in exp.language" :key="language" class="bg-gray-900 px-2 py-3 text-white rounded-md">{{ language }}</p> -->
      <div class="mt-3 flex flex-wrap gap-3">
        <span class="flex items-center flex-row gap-x-1 py-2 md:py-2 px-4 md:px-5 bg-gray-900 text-sm duration-100 font-medium rounded-full hover:text-white hover:bg-gray-800" v-for="icon in exps.languages.icons" :key="icon">
          <img loading="lazy" class="h-6 w-6" :src="`svg/${icon}`" alt="icon svg"/>
          <p>{{ icon.replace('.svg', '') }}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  const experiences = ref([
    {
      since: '2021 — Present',
      position: 'Student at vocational school',
      content:
        'Learning about basic concepts, syntax, and logic of programming languages such as PHP, Java, JavaScript, and others. Also learned about how to apply these programming languages to create applications, web and other projects. I hope that by studying at this vocational school, I can develop my potential and interest in the field of programming.',
      // languages: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript', 'logos:php', 'logos:laravel', 'logos:java', 'logos:flutter'],
      languages: ['HTML.svg', 'CSS.svg', 'JavaScript.svg', 'PHP.svg', 'Laravel.svg', 'Java.svg', 'Flutter.svg'],
    },
    {
      since: 'Jan — Apr 2023',
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
        icons: ['HTML.svg', 'CSS.svg', 'Javascript.svg', 'Bootstrap.svg', 'TailwindCSS.svg', 'Vue.svg', 'Nuxt.svg', 'PHP.svg', 'Laravel.svg', 'VSCode.svg'],
        // texts: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'TailwindCSS', 'Vue', 'Nuxt', 'PHP', 'Lavavel'],
      },
    },
  ]);
</script>
