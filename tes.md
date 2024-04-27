<template>
  <div>
    <div class="mb-10" v-for="experience in experiences" :key="experience">
      <header class="text-white font-bold text-xl">{{ experience.position }}</header>
      <h2 class="text-white">{{ experience.place }}</h2>
      <h3 class="text-white text-sm mb-2.5">{{ experience.since }}</h3>
      <p>
        {{ experience.content }}
      </p>
      <span class="mt-2 flex flex-row gap-x-2 overflow-auto">
        <!-- <p v-for="language in experience.language" :key="language" class="bg-gray-900 px-2 py-3 text-white rounded-md">{{ language }}</p> -->
        <Icon class="w-6 h-6" v-for="language in experience.languages" :key="language" :name="`${language}`" />
      </span>
    </div>
    <div v-for="exps in all" :key="exps">
      <p>programming tools that I use</p>
      <!-- <p v-for="language in exp.language" :key="language" class="bg-gray-900 px-2 py-3 text-white rounded-md">{{ language }}</p> -->
      <div class="flex flex-nowrap overflow-auto">
        <span class="mx-10 gap-x-2 px-2 py-1 flex items-center" v-for="language in exps.languages" :key="language">
          <Icon class="bg-blue-700 w-6 h-6" v-for="icon in language" :key="icon" :name="`${icon}`" />
          <!-- <p v-for="paragraph in exp.paragraphs" :key="paragraph">{{ paragraph }}</p> -->
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
      languages: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript', 'logos:php', 'logos:laravel', 'logos:java', 'logos:flutter'],
      // language: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'Flutter', 'Java'],
    },
    {
      since: 'Jan — Apr 2023',
      position: 'Internship Frond-End Developer',
      place: 'PT Redbuzz Mediatama',
      content: 'Learned how to properly use several libraries and frameworks such as jQuery Vue, Nuxt, Bootstrap for Front-End developers.',
      languages: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript', 'logos:jquery', 'logos:bootstrap', 'logos:vue', 'logos:nuxt-icon'],
      // language: ['HTML', 'CSS', 'JavaScript', 'Jquery', 'Bootstrap', 'Vue', 'Nuxt'],
    },
  ]);
  const all = ref([
    {
      languages: {
        ['vscode-icons:file-type-html', 'HTML'],
        ['vscode-icons:file-type-css', 'CSS'],
        ['logos:javascript', 'JavaScript'],
        ['logos:bootstrap', 'Bootstrap'],
        ['logos:tailwindcss-icon', 'TailwindCSS'],
        ['logos:vue', 'Vue'],
        ['logos:nuxt-icon', 'Nuxt'],
        ['logos:php', 'PHP'],
        ['logos:laravel', 'Lavavel'],
      },
      // paragraphs: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Vue', 'Nuxt', 'PHP', 'Laravel'],
      // language: ['HTML', 'CSS', 'JavaScript', 'Jquery', 'Bootstrap', 'Vue', 'Nuxt'],
    },
  ]);
</script>

shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]