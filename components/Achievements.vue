<template>
  <div class="mb-12" v-for="achievement in achievements" :key="achievement">
    <h2 class="text-white font-bold">{{ achievement.name }}</h2>
    <h3 class="my-0.5">{{ achievement.giver }}</h3>
    <h3 class="my-0.5">{{ achievement.header }}</h3>
    <NuxtLink :to="`${achievement.url}`" target="blank">
      <h5 class="hover:text-teal-500 duration-200">Credential {{ achievement.credential }}</h5>
    </NuxtLink>
  </div>
</template>

<script setup>
  const achievements = ref([
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
      name: 'Alibaba Cloud Certification',
      credential: 'ACCD0119700100008897',
      giver: 'Alibaba Cloud',
      url: 'undefined',
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
