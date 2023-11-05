<template>
  <div class="mt-0 text-xs text-slate-400">
    This website was created using the <span class="duration-200 hover:text-teal-400"><NuxtLink :to="`${nuxt}`" target="blank">Nuxt</NuxtLink></span> framework and created using
    <span class="duration-200 hover:text-cyan-400"><NuxtLink :to="`${tailwindcss}`" target="blank"> Tailwind</NuxtLink></span
    >. Published using
    <span class="duration-200 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-white bg-clip-text hover:text-transparent"> <NuxtLink :to="`${netlify}`" target="blank">Netlify</NuxtLink></span>
  </div>
</template>

<script setup>
  const nuxt = 'https://nuxt.com/';
  const tailwindcss = 'https://tailwindcss.com/';
  const netlify = 'https://www.netlify.com/';
</script>
