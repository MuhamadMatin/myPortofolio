<template>
  <div class="mb-10" v-for="experience in experiences" :key="experience">
    <header class="text-white font-bold text-xl">{{ experience.position }}</header>
    <h2 class="text-white">{{ experience.place }}</h2>
    <h3 class="text-white text-sm mb-2.5">{{ experience.since }}</h3>
    <p class="text-">
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
        'Learning about basic concepts, syntax, and logic of programming languages such as PHP, Java, JavaScript, and others. Also learned about how to apply these programming languages to create applications, web and other projects. I hope that by studying at this vocational school, I can develop my potential and interest in the field of programming.',
    },
    {
      since: 'Jan — Apr 2023',
      position: 'Internship Frond-End Developer',
      place: 'PT Redbuzz Mediatama',
      content: 'Learned how to properly use several libraries and frameworks such as jQuery Vue, Nuxt, Bootstrap for Front-End developers.',
    },
  ]);
</script>
