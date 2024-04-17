<template>
  <div>
    <h1 class="text-white text-4xl font-bold tracking-tight">Muhamad Matin Anugrah Pujayanto</h1>
    <h2 class="mt-3 leading-normal font-inter">
      Student with aspirations of becoming
      <span class="hover:text-teal-300 duration-200">Full Stack Web Developer</span>
    </h2>
    <div class="flex gap-x-4">
      <NuxtLink v-for="link in links" :key="link" :to="`${link.URL}`" target="blank" class="mt-2">
        <Icon class="h-10 w-10 text-[#24292F] active:text-white hover:text-white duration-200" :name="`${link.svg}`" />
        <!-- <img class="w-8 h-8" :src="`/svg/${link.svg}`" :alt="`${link.alt}`" /> -->
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const links = ref([
    {
      svg: 'mdi:github',
      alt: 'github icon',
      URL: 'https://github.com/MuhamadMatin',
    },
    {
      svg: 'mdi:instagram',
      alt: 'instagram icon',
      URL: 'https://www.instagram.com/matinwithcode?igsh=MzRlODBiNWFlZA==',
    },
    {
      svg: 'mdi:linkedin',
      alt: 'linkedin icon',
      URL: 'https://linkedin.com/in/muhamad-matin-anugrah-pujayanto-b64515260',
    },
  ]);
</script>
