<script setup>
  const links = ref([
    {
      svg: 'mdi:github',
      // svg: 'github.svg',
      alt: 'github',
      URL: 'https://github.com/MuhamadMatin',
    },
    {
      svg: 'mdi:instagram',
      // svg: 'instagram.svg',
      alt: 'instagram',
      URL: 'https://www.instagram.com/matinwithcode?igsh=MzRlODBiNWFlZA==',
    },
    {
      svg: 'mdi:linkedin',
      // svg: 'linkedin.svg',
      alt: 'linkedin',
      URL: 'https://linkedin.com/in/muhamad-matin-anugrah-pujayanto',
    },
  ]);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold tracking-tight text-white">Muhamad Matin Anugrah Pujayanto</h1>
    <blockquote class="px-4 py-2.5 my-4 border-s-4 border-[#fff] max-w-sm lg:max-w-md">
      <h2 class="italic leading-relaxe">"Learning and striving to <span class="duration-200 cursor-pointer hover:text-teal-300"> Become A Better Full-Stack Web Developer</span>, even if it's just one piece of code."</h2>
    </blockquote>
    <div class="flex flex-col">
      <p class="text-sm">let's connect with me 🤝</p>
      <span class="flex gap-x-4">
        <NuxtLink v-for="link in links" :key="link" :to="`${link.URL}`" target="blank" :area-label="`${link.alt}`" :alt="`${link.alt}`">
          <Icon class="mt-2 h-10 w-10 text-[#24292F] active:text-white hover:text-white duration-200" :name="`${link.svg}`" />
          <!-- <img loading="lazy" class="w-10 h-10 duration-200 active:text-white hover:text-white" :src="`/svg/${link.svg}`" :alt="`${link.alt}`" /> -->
        </NuxtLink>
      </span>
    </div>
  </div>
</template>
