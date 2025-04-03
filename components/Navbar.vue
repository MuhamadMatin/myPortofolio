<script setup>
  const isOpen = ref(false);
</script>

<template>
  <div class="sticky top-0 backdrop-blur-sm">
    <div :class="isOpen ? 'translate-x-0 duration-500 min-h-screen' : '-translate-x-full min-h-screen duration-500'" class="absolute z-20 w-64 h-full overflow-auto text-black bg-white">
      <button @click="isOpen = !isOpen" class="p-2">Tutup</button>
      <div class="flex flex-col p-2 space-y-2">
        <NuxtLink to="/"> About </NuxtLink>
        <NuxtLink to="/"> Rewards </NuxtLink>
        <NuxtLink to="/"> Projects </NuxtLink>
      </div>
    </div>
    <div>
      <button @click="isOpen = !isOpen" class="px-3 py-2 backdrop-blur-sm group">
        <div class="w-6 h-1 mb-1 duration-300 bg-white group-hover:bg-teal-300"></div>
        <div class="w-6 h-1 mb-1 duration-300 bg-white group-hover:bg-teal-300"></div>
        <div class="w-6 h-1 duration-300 bg-white group-hover:bg-teal-300"></div>
      </button>
    </div>
  </div>
</template>
