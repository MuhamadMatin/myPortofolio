<script setup>
  definePageMeta({
    layout: 'custom',
  });

  const achievements = ref([
    {
      header: 'Sep 2024',
      name: 'Full-Stack Web Development: Bikin Projek Ujian Online CBT',
      credential: 'yc9v9inbwZ',
      giver: 'BuildWithAngga',
      image: 'cbt.webp',
      url: 'error',
      target: '_self',
    },
    {
      header: 'Sep 2024',
      name: 'Laravel 11, Breeze, Spatie: Bikin Web Platform Online Course',
      credential: 'We0axe6tcu',
      image: 'course.webp',
      giver: 'BuildWithAngga',
      url: 'error',
      target: '_self',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Konsep AUTH dan implementasi di Express',
      credential: '73ZTSRL',
      giver: 'Codepolitan',
      image: 'expressauth.webp',
      url: 'https://codepolitan.com/c/HDH1S8L',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Implementasi Relasi Database MongoDB di Express, Mongoose',
      credential: 'C6DXHNW',
      giver: 'Codepolitan',
      image: 'mongoexpress.webp',
      url: 'https://codepolitan.com/c/HDH1S8L',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar Relasi Data di MongoDB (Database Relationship)',
      credential: 'C6DXHNW',
      giver: 'Codepolitan',
      image: 'relasimongo.webp',
      url: 'https://codepolitan.com/c/OLKON7Z',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar Menggunakan MongoDB di JavaScript',
      credential: 'C6DXHNW',
      giver: 'Codepolitan',
      image: 'jsmongo.webp',
      url: 'https://codepolitan.com/c/YAUX6CC',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar MongoDB',
      credential: 'C6DXHNW',
      giver: 'Codepolitan',
      image: 'mongo.webp',
      url: 'https://codepolitan.com/c/C6DXHNW',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar GIT Untuk Progammer Pemula',
      credential: 'GL3453805332',
      giver: 'Gamelab Indonesia',
      image: 'git.webp',
      url: 'https://gamelab.id/certificate/GL3453805332',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar RESTful dengan Express.js',
      credential: 'PNFDGTU',
      giver: 'Codepolitan',
      image: 'restfull.webp',
      url: 'https://codepolitan.com/c/PNFDGTU',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar Dasar Express.js',
      credential: '84CTEYF',
      giver: 'Codepolitan',
      image: 'express.webp',
      url: 'https://codepolitan.com/c/84CTEYF',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar Dasar Node.js dan NPM',
      credential: 'H2QTNAW',
      giver: 'Codepolitan',
      image: 'node.webp',
      url: 'https://codepolitan.com/c/H2QTNAW',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar VueJS 3',
      credential: '1WENAIV',
      giver: 'Codepolitan',
      image: 'vue3.webp',
      url: 'https://codepolitan.com/c/1WENAIV',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar AJAX dan Web API',
      credential: 'PCZ3FB0',
      giver: 'Codepolitan',
      image: 'ajax.webp',
      url: 'https://codepolitan.com/c/PCZ3FB0',
      target: '_blank',
    },
    {
      header: 'Mei 2024 — Mei 2027',
      name: 'Belajar JavaScript DOM',
      credential: 'ZWTUJWV',
      giver: 'Codepolitan',
      image: 'jsdom.webp',
      url: 'https://codepolitan.com/c/ZWTUJWV',
      target: '_blank',
    },
    {
      header: 'Mei 2024 — Mei 2027',
      name: 'Belajar JavaScript',
      credential: 'B9TTI3Z',
      giver: 'Codepolitan',
      image: 'js.webp',
      url: 'https://codepolitan.com/c/B9TTI3Z',
      target: '_blank',
    },
    {
      header: 'April 2024 — April 2027',
      name: 'Belajar Bootstrap CSS Framework',
      credential: 'K7OU1VU',
      giver: 'Codepolitan',
      image: 'bootstrap.webp',
      url: 'https://codepolitan.com/c/K7OU1VU',
      target: '_blank',
    },
    {
      header: 'April 2024 — April 2027',
      name: 'Belajar Dasar CSS',
      credential: 'RFTABOX',
      giver: 'Codepolitan',
      image: 'css.webp',
      url: 'https://codepolitan.com/c/RFTABOX',
      target: '_blank',
    },
    {
      header: 'April 2024 — April 2027',
      name: 'Belajar Dasar HTML',
      credential: 'KIE3AKG',
      giver: 'Codepolitan',
      image: 'html.webp',
      url: 'https://codepolitan.com/c/KIE3AKG',
      target: '_blank',
    },
    {
      header: 'March 2024 — March 2027',
      name: 'Developer Clouder',
      credential: 'ACCD0119700100008897',
      giver: 'Alibaba Cloud',
      image: 'developer_clouder.webp',
      url: '404',
      target: '',
    },
    {
      header: 'September 2023 — September 2025',
      name: 'Belajar Dasar Visualisasi Data',
      credential: 'JMZV12J5RXN9',
      giver: 'Dicoding',
      image: 'logic_101.webp',
      url: 'https://www.dicoding.com/certificates/JMZV12J5RXN9',
      target: '_blank',
    },
    {
      header: 'August 2023 — August 2025',
      name: 'Pengenalan Ke Logika Pemrograman (Progamming Logic 101)',
      credential: '0LZ0983QNZ65',
      giver: 'Dicoding',
      image: 'logic_101.webp',
      url: 'https://www.dicoding.com/certificates/0LZ0983QNZ65',
      target: '_blank',
    },
    {
      header: 'July 2023 — July 2025',
      name: 'Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software',
      credential: 'MRZMQO0O3PYQ',
      giver: 'Dicoding',
      image: 'dasar_pengembangan_pemrograman.webp',
      url: 'https://www.dicoding.com/certificates/MRZMQO0O3PYQ',
      target: '_blank',
    },
  ]);
</script>

<template>
  <NuxtLayout :name="custom">
    <div class="mb-12" v-for="achievement in achievements" :key="achievement">
      <NuxtImg :src="`/images/achivments/${achievement.image}`" alt="achievement image" :custom="true" v-slot="{ src, isLoaded, imgAttrs }">
        <img v-if="isLoaded" v-bind="imgAttrs" :src="src" class="object-cover w-full bg-cover rounded-md md:h-48 lg:h-80" loading="lazy" />

        <div v-else class="w-full h-52 md:h-48 lg:h-80 rounded-md animate-pulse bg-[hsl(200,20%,70%)]" />
      </NuxtImg>

      <h1 class="mt-2 text-lg font-bold text-white">{{ achievement.name }}</h1>
      <h2 class="my-0.5 text-sm md:text-base">{{ achievement.giver }} || {{ achievement.header }}</h2>

      <NuxtLink class="flex justify-items-center group" :to="`${achievement.url}`" :target="`${achievement.target}`">
        <h4 class="text-sm duration-200 md:text-base group-hover:text-teal-500">Credential {{ achievement.credential }}</h4>
        <Icon class="inline-block w-5 h-5 duration-200 group-hover:text-teal-500 group-hover:translate-x-1 group-hover:-translate-y-1" name="tabler:arrow-up-right" />
      </NuxtLink>
    </div>

    <div class="md:grid md:col-span-2 place-items-center">
      <NuxtLink
        class="flex items-center justify-center px-12 py-2 mb-5 space-x-2 text-sm font-medium align-middle duration-100 bg-gray-900 rounded-full cursor-pointer justify-items-center group lg:px-15 lg:py-4 hover:text-white hover:bg-gray-800 w-fit lg:text-base gap-x-1"
        to="/projects">
        Achievements finish <br />
        Let's see my projects
        <Icon class="inline-block w-6 h-6 duration-200 rotate-45 group-hover:text-teal-500 group-hover:translate-x-2" name="tabler:arrow-up-right" />
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
