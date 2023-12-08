<template>
  <div class="sticky top-0 backdrop-blur-sm">
    <div :class="isOpen ? 'translate-x-0 duration-500 min-h-screen' : '-translate-x-full min-h-screen duration-500'" class="bg-white w-64 absolute z-20 text-black h-full overflow-auto">
      <button @click="isOpen = !isOpen" class="p-2">Tutup</button>
      <div class="space-y-2 p-2 flex flex-col">
        <NuxtLink to="/"> About </NuxtLink>
        <NuxtLink to="/"> Rewards </NuxtLink>
        <NuxtLink to="/"> Projects </NuxtLink>
      </div>
    </div>
    <div>
      <button @click="isOpen = !isOpen" class="py-2 px-3 backdrop-blur-sm group">
        <div class="w-6 h-1 bg-white mb-1 group-hover:bg-teal-300 duration-300"></div>
        <div class="w-6 h-1 bg-white mb-1 group-hover:bg-teal-300 duration-300"></div>
        <div class="w-6 h-1 bg-white group-hover:bg-teal-300 duration-300"></div>
      </button>
    </div>
  </div>
</template>

<script setup>
  const isOpen = ref(false);
</script>