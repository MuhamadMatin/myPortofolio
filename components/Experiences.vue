<template>
  <div class="mb-10" v-for="experience in experiences" :key="experience">
    <header class="text-white mb-0.5">{{ experience.since }}</header>
    <h2 class="font-bold" :class="experience.place != null ? 'mb-3' : 'mb-3'">{{ experience.position }}</h2>
    <!-- <h3 class="font-semibold mb-0.5">{{ experience.place }}</h3> -->
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
