<template>
  <div class="mb-12" v-for="achievement in achievements" :key="achievement">
    <h2 class="text-white font-bold">{{ achievement.name }}</h2>
    <h3 class="my-0.5">{{ achievement.giver }}</h3>
    <h3 class="my-0.5">{{ achievement.header }}</h3>
    <NuxtLink class="flex justify-items-center group" :to="`${achievement.url}`" target="blank">
      <h4 class="group-hover:text-teal-500 duration-200">Credential {{ achievement.credential }}</h4>
      <Icon class="inline-block h-5 w-5 group-hover:text-teal-500 group-hover:translate-x-1 group-hover:-translate-y-1 duration-200" name="tabler:arrow-up-right" />
      <!-- <NuxtImg  loading="lazy" src="../public/svg/arrow-up-right.svg" /> -->
    </NuxtLink>
  </div>
</template>

<script setup>
  const achievements = ref([
    {
      header: 'April 2024 — April 2027',
      name: 'Belajar Bootstrap CSS Framework',
      credential: 'K7OU1VU',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/K7OU1VU',
    },
    {
      header: 'April 2024 — April 2027',
      name: 'Belajar Dasar CSS',
      credential: 'RFTABOX',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/RFTABOX',
    },
    {
      header: 'April 2024 — April 2027',
      name: 'Belajar Dasar HTML',
      credential: 'KIE3AKG',
      giver: 'Codepolitan',
      url: 'https://codepolitan.com/c/KIE3AKG',
    },
    {
      header: 'March 2024 — March 2027',
      name: 'Certified Developer',
      credential: 'ACCD0119700100008897',
      giver: 'Alibaba Cloud',
      url: 'https://google.com/search?q=file+not+found',
    },
    {
      header: 'September 2023 — September 2025',
      name: 'Belajar Dasar Visualisasi Data',
      credential: 'JMZV12J5RXN9',
      giver: 'Dicoding Indonesia',
      url: 'https://www.dicoding.com/certificates/JMZV12J5RXN9',
    },
    {
      header: 'August 2023 — August 2025',
      name: 'Pengenalan Ke Logika Pemrograman (Progamming Logic 101)',
      credential: '0LZ0983QNZ65',
      giver: 'Dicoding Indonesia',
      url: 'https://www.dicoding.com/certificates/0LZ0983QNZ65',
    },
    {
      header: 'July 2023 — July 2025',
      name: 'Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software',
      credential: 'MRZMQO0O3PYQ',
      giver: 'Dicoding Indonesia',
      url: 'https://www.dicoding.com/certificates/MRZMQO0O3PYQ',
    },
  ]);
</script>
