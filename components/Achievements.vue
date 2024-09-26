<script setup>
  const achievements = ref([
    {
      header: 'Sep 2024',
      name: 'Full-Stack Web Development: Bikin Projek Ujian Online CBT',
      credential: 'yc9v9inbwZ',
      giver: 'BuildWithAngga',
      url: 'error',
      target: '_self',
    },
    {
      header: 'Sep 2024',
      name: 'Laravel 11, Breeze, Spatie: Bikin Web Platform Online Course',
      credential: 'We0axe6tcu',
      giver: 'BuildWithAngga',
      url: 'error',
      target: '_self',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Implementasi Relasi Database MongoDB di Express, Mongoose',
      credential: 'C6DXHNW',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/HDH1S8L',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar Relasi Data di MongoDB (Database Relationship)',
      credential: 'C6DXHNW',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/OLKON7Z',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar Menggunakan MongoDB di JavaScript',
      credential: 'C6DXHNW',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/YAUX6CC',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar MongoDB',
      credential: 'C6DXHNW',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/C6DXHNW',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar GIT Untuk Progammer Pemula',
      credential: 'GL3453805332',
      giver: 'Gamelab Indonesia',
      url: 'https://gamelab.id/certificate/GL3453805332',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar RESTful dengan Express.js',
      credential: 'PNFDGTU',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/PNFDGTU',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar Dasar Express.js',
      credential: '84CTEYF',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/84CTEYF',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar Dasar Node.js dan NPM',
      credential: 'H2QTNAW',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/H2QTNAW',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar VueJS 3',
      credential: '1WENAIV',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/1WENAIV',
      target: '_blank',
    },
    {
      header: 'Jun 2024 — Jun 2027',
      name: 'Belajar AJAX dan Web API',
      credential: 'PCZ3FB0',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/PCZ3FB0',
      target: '_blank',
    },
    {
      header: 'Mei 2024 — Mei 2027',
      name: 'Belajar JavaScript DOM',
      credential: 'ZWTUJWV',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/ZWTUJWV',
      target: '_blank',
    },
    {
      header: 'Mei 2024 — Mei 2027',
      name: 'Belajar JavaScript',
      credential: 'B9TTI3Z',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/B9TTI3Z',
      target: '_blank',
    },
    {
      header: 'April 2024 — April 2027',
      name: 'Belajar Bootstrap CSS Framework',
      credential: 'K7OU1VU',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/K7OU1VU',
      target: '_blank',
    },
    {
      header: 'April 2024 — April 2027',
      name: 'Belajar Dasar CSS',
      credential: 'RFTABOX',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/RFTABOX',
      target: '_blank',
    },
    {
      header: 'April 2024 — April 2027',
      name: 'Belajar Dasar HTML',
      credential: 'KIE3AKG',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/KIE3AKG',
      target: '_blank',
    },
    {
      header: 'March 2024 — March 2027',
      name: 'Developer Clouder',
      credential: 'ACCD0119700100008897',
      giver: 'Alibaba Cloud',
      url: '404',
      target: '',
    },
    {
      header: 'September 2023 — September 2025',
      name: 'Belajar Dasar Visualisasi Data',
      credential: 'JMZV12J5RXN9',
      giver: 'Dicoding',
      url: 'https://www.dicoding.com/certificates/JMZV12J5RXN9',
      target: '_blank',
    },
    {
      header: 'August 2023 — August 2025',
      name: 'Pengenalan Ke Logika Pemrograman (Progamming Logic 101)',
      credential: '0LZ0983QNZ65',
      giver: 'Dicoding',
      url: 'https://www.dicoding.com/certificates/0LZ0983QNZ65',
      target: '_blank',
    },
    {
      header: 'July 2023 — July 2025',
      name: 'Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software',
      credential: 'MRZMQO0O3PYQ',
      giver: 'Dicoding',
      url: 'https://www.dicoding.com/certificates/MRZMQO0O3PYQ',
      target: '_blank',
    },
  ]);
</script>

<template>
  <div class="mb-12" v-for="achievement in achievements" :key="achievement">
    <h2 class="font-bold text-white">{{ achievement.name }}</h2>
    <h3 class="my-0.5">{{ achievement.giver }}</h3>
    <h3 class="my-0.5">{{ achievement.header }}</h3>
    <NuxtLink class="flex justify-items-center group" :to="`${achievement.url}`" :target="`${achievement.target}`">
      <h4 class="duration-200 group-hover:text-teal-500">Credential {{ achievement.credential }}</h4>
      <Icon class="inline-block w-5 h-5 duration-200 group-hover:text-teal-500 group-hover:translate-x-1 group-hover:-translate-y-1" name="tabler:arrow-up-right" />
      <!-- <NuxtImg  loading="lazy" src="../public/svg/arrow-up-right.svg" /> -->
    </NuxtLink>
  </div>
</template>
