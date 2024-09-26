<script setup lang="ts">
  const error = useError();
  const title = '404 Not Found';
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center min-h-screen bg-black text-text">
      <Head>
        <!-- ini merupakan cara menambahkan head pada Nuxt -->
        <Html lang="en" />
        <Title>{{ title }}</Title>
        <Meta name="description" :content="title" />
      </Head>
      <span class="mb-8 text-center md:mb-0 md:gap-x-5 md:flex md:justify-center md:items-center">
        <h1 class="mb-4 text-6xl font-bold">404</h1>
        <h2 class="text-2xl md:mb-0">File Not Found</h2>
      </span>
      <NuxtLink to="/" class="px-4 py-2 text-white transition duration-300 ease-in-out bg-teal-500 rounded-md hover:shadow-md hover:shadow-teal-500">Go back to homepage</NuxtLink>
    </div>
  </NuxtLayout>
</template>
