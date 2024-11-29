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
      <p>What do I use to build client websites</p>
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
      since: 'Nov 2024 — Present',
      position: 'Internship Web Developer',
      place: 'PT Digital Solusi Master',
      content: '',
      // languages: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript', 'logos:php', 'logos:laravel', 'logos:java', 'logos:flutter'],
      languages: ['Laravel.svg', 'MySQL.svg', 'DBeaver.svg', 'Gitlab.svg'],
    },
    {
      since: 'Jul 2024 — Nov 2024',
      position: 'Full Stack Developer',
      place: 'Samagaha Creative Digital',
      content:
        'Developing websites that adhere to best coding practices and established documentation standards, I ensure that each project maintains quality and consistency. I conduct thorough testing to confirm that all functions run smoothly and meet user needs. I always prioritize UI/UX principles to create a more enjoyable and seamless user experience.',
      // languages: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript', 'logos:php', 'logos:laravel', 'logos:java', 'logos:flutter'],
      languages: ['Laravel.svg', 'MySQL.svg', 'TailwindCSS.svg', 'DBeaver.svg', 'Github.svg'],
    },
    {
      since: 'Jun 2021 — Jun 2024',
      position: 'Student at vocational school',
      place: 'SMK 17 Agustus 1945 Surabaya',
      content:
        'Gaining knowledge of programming concepts, syntax, and logic in languages like PHP, Java, and JavaScript has provided a strong foundation for building my programming skills. Learning to apply best practices in these languages has equipped me to create efficient and maintainable applications and websites. Through a curriculum designed to foster my potential, interests, and career path, vocational school has offered me valuable hands-on experience and essential skills in application and website development. Additionally, seminars and competitions have enhanced my ability to use programming languages to solve real-world case studies.',
      // languages: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript', 'logos:php', 'logos:laravel', 'logos:java', 'logos:flutter'],
      languages: ['HTML.svg', 'CSS.svg', 'JavaScript.svg', 'PHP.svg', 'Laravel.svg', 'MySQL.svg', 'Java.svg', 'Flutter.svg', 'Github.svg'],
    },
    {
      since: 'Jan 2023 — Apr 2023',
      position: 'Internship Frond-End Developer',
      place: 'PT Redbuzz Mediatama',
      content:
        'Learning to leverage the powerful features of Nuxt has enabled me to handle DOM manipulation and event handling more easily, simplifying my web development process. By utilizing and implementing various Bootstrap features, I can create responsive websites that adapt seamlessly to any device. Additionally, I understand, study, and apply UI/UX principles in my projects to ensure an intuitive, user-friendly interface and an optimal user experience.',
      // languages: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript', 'logos:jquery', 'logos:bootstrap', 'logos:vue', 'logos:nuxt-icon'],
      languages: ['HTML.svg', 'CSS.svg', 'JavaScript.svg', 'Jquery.svg', 'Bootstrap.svg', 'Vue.svg', 'Nuxt.svg', 'Gitlab.svg'],
    },
  ]);
  const all = ref([
    {
      languages: {
        icons: ['Vue.svg', 'Nuxt.svg', 'Bootstrap.svg', 'TailwindCSS.svg', 'PHP.svg', 'Laravel.svg', 'MySQL.svg', 'DBeaver.svg', 'VSCode.svg', 'Github.svg'],
        // texts: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'TailwindCSS', 'Vue', 'Nuxt', 'PHP', 'Lavavel'],
      },
    },
  ]);
</script>
