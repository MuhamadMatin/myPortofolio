<template>
  <div v-for="experience in experiences" :key="experience">
    <header class="text-white mb-0.5">{{ experience.since }}</header>
    <h2 class="mb-4 font-bold">{{ experience.position }}</h2>
    <p>
      {{ experience.content }}
    </p>
  </div>
</template>

<script setup>
  const experiences = ref([
    {
      since: '2021 — Present',
      position: 'Student at vocational school',
      content:
        'Learned about basic concepts, syntax, and logic of programming languages such as PHP, Java, JavaScript, and others. Also learned about how to apply these programming languages to create applications, web and other projects. I hope that by studying at this vocational school, I can develop my potential and interest in the field of programming.',
    },
  ]);
</script>
