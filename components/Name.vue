<template>
  <div>
    <h1 class="text-white text-4xl font-bold tracking-tight">Muhamad Matin Anugrah Pujayanto</h1>
    <blockquote class="px-4 py-2.5 my-4 border-s-4 border-[#fff] max-w-sm lg:max-w-md">
      <h2 class="italic leading-relaxe">
        "Student with aspirations of becoming
        <span class="hover:text-teal-300 duration-200 cursor-pointer">Full Stack Web Developer</span>."
      </h2>
    </blockquote>
    <div class="flex gap-x-4">
      <NuxtLink v-for="link in links" :key="link" :to="`${link.URL}`" target="blank" area-label="connect withh me🤝">
        <!-- <Icon class="mt-2 h-10 w-10 text-[#24292F] active:text-white hover:text-white duration-200" :name="`${link.svg}`" /> -->
        <NuxtImg class="w-10 h-10 active:text-white hover:text-white duration-200" :src="`svg/${link.svg}`" :alt="`${link.alt}`" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const links = ref([
    {
      // svg: 'mdi:github',
      svg: 'github.svg',
      alt: 'github icon',
      URL: 'https://github.com/MuhamadMatin',
    },
    {
      // svg: 'mdi:instagram',
      svg: 'instagram.svg',
      alt: 'instagram icon',
      URL: 'https://www.instagram.com/matinwithcode?igsh=MzRlODBiNWFlZA==',
    },
    {
      // svg: 'mdi:linkedin',
      svg: 'linkedin.svg',
      alt: 'linkedin icon',
      URL: 'https://linkedin.com/in/muhamad-matin-anugrah-pujayanto-b64515260',
    },
  ]);
</script>
