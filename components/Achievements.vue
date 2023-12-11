<template>
  <div class="mb-12" v-for="achievement in achievements" :key="achievement">
    <header class="mb-0.5">{{ achievement.header }}</header>
    <h2 class="font-bold text-text">{{ achievement.name }}</h2>
  </div>
</template>

<script setup>
  const achievements = ref([
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
  ]);
</script>
