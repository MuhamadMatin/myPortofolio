<template>
  <div>
    <h1 class="text-white text-4xl font-bold tracking-tight">Muhamad Matin Anugrah Pujayanto</h1>
    <h2 class="mt-3 leading-normal font-inter">
      Students with aspirations of becoming
      <span class="hover:text-teal-300 duration-200">full stack developers</span>
    </h2>
    <div class="flex gap-x-4">
      <NuxtLink v-for="link in links" :key="link" :to="`${link.URL}`" target="blank" class="mt-4">
        <img class="w-8 h-8" :src="`/svg/${link.svg}`" :alt="`${link.alt}`" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const links = ref([
    {
      svg: 'github.svg',
      alt: 'github icon',
      URL: 'https://github.com/MuhamadMatin',
    },
    {
      svg: 'instagram.svg',
      alt: 'instagram icon',
      URL: 'https://www.instagram.com/matinwithcode?igsh=MzRlODBiNWFlZA==',
    },
  ]);
</script>
