<script setup>
  const achievements = ref([
    {
      header: 'Okt 2024 — Okt 2027',
      name: 'Memulai Pemrograman dengan Python',
      credential: '1RXY26K5MXVM',
      giver: 'Dicoding',
      image: 'phyton.webp',
      url: 'https://www.dicoding.com/certificates/1RXY26K5MXVM',
      target: '_blank',
    },
    {
      header: 'Okt 2024',
      name: 'Problem Solving (Basic)',
      credential: '1ED5CE727AFE',
      giver: 'HackerRank',
      image: 'problem_solving.webp',
      url: 'https://www.hackerrank.com/certificates/iframe/1ed5ce727afe',
      target: '_blank',
    },
    {
      header: 'Sep 2024 — Sep 2027',
      name: 'Belajar Dasar Data Science',
      credential: 'GRX54N7K3P0M',
      giver: 'Dicoding',
      image: 'data_science.webp',
      url: 'https://www.dicoding.com/certificates/4EXG7E7EEPRL',
      target: '_blank',
    },
    {
      header: 'Sep 2024 — Sep 2027',
      name: 'Belajar Dasar Structured Query Language (SQL)',
      credential: 'GRX54N7K3P0M',
      giver: 'Dicoding',
      image: 'sql.webp',
      url: 'https://www.dicoding.com/certificates/GRX54N7K3P0M',
      target: '_blank',
    },
    {
      header: 'Sep 2024',
      name: 'Full-Stack Web Development: Bikin Projek Ujian Online CBT',
      credential: 'yc9v9inbwZ',
      giver: 'BuildWithAngga',
      image: 'cbt.webp',
      url: 'error',
      target: '_self',
    },
  ]);
</script>

<template>
  <div class="space-y-12">
    <div v-for="achievement in achievements" :key="achievement">
      <h2 class="font-bold text-white">{{ achievement.name }}</h2>
      <h3 class="my-0.5">{{ achievement.giver }} || {{ achievement.header }}</h3>
      <NuxtLink class="flex justify-items-center group" :to="`${achievement.url}`" :target="`${achievement.target}`">
        <h4 class="duration-200 group-hover:text-teal-500">Credential {{ achievement.credential }}</h4>
        <Icon class="inline-block w-5 h-5 duration-200 group-hover:text-teal-500 group-hover:translate-x-1 group-hover:-translate-y-1" name="tabler:arrow-up-right" />
        <!-- <NuxtImg  loading="lazy" src="../public/svg/arrow-up-right.svg" /> -->
      </NuxtLink>
    </div>
  </div>
  <NuxtLink
    class="flex flex-row items-center px-4 py-2 mx-auto mt-5 space-x-2 text-sm font-medium duration-100 bg-gray-900 rounded-full cursor-pointer gap-x-1 md:py-3 md:px-6 hover:text-white hover:bg-gray-800 group w-fit"
    to="/achievements">
    Let's see my achievements
    <Icon class="inline-block w-6 h-6 duration-200 rotate-45 group-hover:text-teal-500 group-hover:translate-x-2" name="tabler:arrow-up-right" />
  </NuxtLink>
</template>
