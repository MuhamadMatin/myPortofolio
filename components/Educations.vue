<script setup>
  const educations = ref([
    {
      since: 'Jun 2021 — Jun 2024',
      position: 'Student at vocational school',
      place: 'SMK 17 Agustus 1945 Surabaya',
      content:
        'Gaining knowledge of programming concepts, syntax, and logic in languages like PHP, Java, and JavaScript has provided a strong foundation for building my programming skills. Learning to apply best practices in these languages has equipped me to create efficient and maintainable applications and websites. Through a curriculum designed to foster my potential, interests, and career path, vocational school has offered me valuable hands-on experience and essential skills in application and website development. Additionally, seminars and competitions have enhanced my ability to use programming languages to solve real-world case studies.',
      // languages: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript', 'logos:php', 'logos:laravel', 'logos:java', 'logos:flutter'],
      languages: ['HTML.svg', 'CSS.svg', 'JavaScript.svg', 'PHP.svg', 'Laravel.svg', 'Java.svg', 'Flutter.svg', 'MySQL.svg', 'Github.svg'],
    },
  ]);
</script>

<template>
  <div class="mb-10" v-for="education in educations" :key="education">
    <header class="text-xl font-bold text-white">{{ education.position }}</header>
    <h2 class="text-white">{{ education.place }}</h2>
    <h3 class="text-sm text-white">{{ education.since }}</h3>
    <p class="my-3 lg:my-2.5">
      {{ education.content }}
    </p>
    <div class="flex flex-wrap gap-3 mt-2">
      <span class="flex flex-row items-center px-4 py-2 text-sm font-medium duration-100 bg-gray-900 rounded-full cursor-pointer gap-x-1 md:py-2 md:px-5 hover:text-white hover:bg-gray-800" v-for="icon in education.languages" :key="icon">
        <img loading="lazy" class="w-6 h-6" :src="`svg/${icon}`" alt="icon svg" />
        <p>{{ icon.replace('.svg', '') }}</p>
      </span>
      <!-- <p v-for="language in experience.language" :key="language" class="px-2 py-3 text-white bg-gray-900 rounded-md">{{ language }}</p> -->
      <!-- <Icon class="w-6 h-6" v-for="language in experience.languages" :key="language" :name="`${language}`" /> -->
    </div>
  </div>
</template>
