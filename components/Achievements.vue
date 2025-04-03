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
  ]);
</script>

<template>
  <div class="space-y-12">
    <div v-for="achievement in achievements" :key="achievement">
      <h2 class="font-bold text-white">{{ achievement.name }}</h2>
      <h3 class="my-0.5">{{ achievement.giver }}</h3>
      <h3 class="my-0.5">{{ achievement.header }}</h3>
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
    Let's see all my achievement
    <Icon class="inline-block w-6 h-6 duration-200 rotate-45 group-hover:text-teal-500 group-hover:translate-x-2" name="tabler:arrow-up-right" />
  </NuxtLink>
</template>
