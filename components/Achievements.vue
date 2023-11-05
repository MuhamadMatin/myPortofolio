<template>
  <div class="mb-12" v-for="achievement in achievements" :key="achievement">
    <header>{{ achievement.header }}</header>
    <h2 class="mb-4 font-bold text-slate-200">{{ achievement.name }}</h2>
    <p class="text-sm md:text-base">
      {{ achievement.desk }}
    </p>
  </div>
</template>

<script setup>
  const achievements = [
    {
      header: 'July 2023 — Dicoding Indonesia',
      name: 'Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software',
      desk: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex minus doloremque architecto fugiat sunt fuga fugit eveniet minima? Voluptatum vel sequi, facilis animi qui minus nesciunt. Excepturi, officia tenetur!',
    },
    {
      header: 'August 2023 — Dicoding Indonesia',
      name: 'Pengenalan Ke Logika Pemrograman (Progamming Logic 101)',
      desk: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex minus doloremque architecto fugiat sunt fuga fugit eveniet minima? Voluptatum vel sequi, facilis animi qui minus nesciunt. Excepturi, officia tenetur!',
    },
    {
      header: 'September 2023 — Dicoding Indonesia',
      name: 'Belajar Dasar Visualisasi Data',
      desk: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex minus doloremque architecto fugiat sunt fuga fugit eveniet minima? Voluptatum vel sequi, facilis animi qui minus nesciunt. Excepturi, officia tenetur!',
    },
  ];
</script>
