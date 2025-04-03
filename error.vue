<script setup lang="ts">
  const error = useError();
  const title = '404 Not Found';
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black text-text">
    <Head>
      <!-- ini merupakan cara menambahkan head pada Nuxt -->
      <Html lang="en" />
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <span class="mb-8 text-center md:mb-0 md:gap-x-5 md:flex md:justify-center md:items-center">
      <h1 class="mb-4 text-6xl font-bold text-white">404</h1>
      <h2 class="text-2xl text-gray-400 md:mb-0">Items Not Found</h2>
    </span>
    <NuxtLink to="/" class="px-6 py-3 mt-6 text-white transition duration-300 ease-in-out transform bg-teal-500 rounded-md hover:shadow-lg hover:shadow-teal-500"> Go back to homepage </NuxtLink>
  </div>
</template>
