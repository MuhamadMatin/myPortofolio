<template>
  <div class="mb-12" v-for="achievement in achievements" :key="achievement">
    <header>{{ achievement.header }}</header>
    <h2 class="mb-4 font-bold text-[#7E7F83]">{{ achievement.name }}</h2>
    <p class="text-sm md:text-base">
      {{ achievement.desk }}
    </p>
  </div>
</template>

<script setup>
  const achievements = [
    {
      header: 'September 2023 — Dicoding Indonesia',
      name: 'Belajar Dasar Visualisasi Data',
    },
    {
      header: 'August 2023 — Dicoding Indonesia',
      name: 'Pengenalan Ke Logika Pemrograman (Progamming Logic 101)',
    },
    {
      header: 'July 2023 — Dicoding Indonesia',
      name: 'Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software',
    },
  ];
</script>
