<template>
  <!-- @click.right="handleRightClick()" -->
  <div class="bg-background font-tes">
    <Head>
      <!-- ini merupakan cara menambahkan head pada Nuxt -->
      <Html lang="en" />
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div class="py-10 mx-auto text-white md:max-w-md lg:max-w-xl">
      <div class="px-5">
        <h1 class="text-4xl font-bold tracking-tight">Muhamad Matin Anugrah Pujayanto</h1>
        <h2 class="mt-4 leading-normal font-inter">
          Students with aspirations of becoming
          <span class="text-text hover:text-teal-300 duration-200">full stack developers</span>
        </h2>
        <!-- about -->
        <section id="about" class="my-24">
          <h1 :class="isSticky ? 'sticky top-0 inline-block' : ''" class="mb-2 py-4 w-full backdrop-blur-sm text-2xl md:text-3xl font-semibold text-white">About Me</h1>
          <About />
        </section>
        <section id="experience" class="my-24">
          <h1 :class="isSticky ? 'sticky top-0 inline-block' : ''" class="mb-2 py-4 w-full backdrop-blur-sm text-2xl md:text-3xl font-semibold text-white">Experience</h1>
          <Experiences />
        </section>
        <!-- achievement -->
        <section id="achievement" class="my-24">
          <h1 :class="isSticky ? 'sticky top-0 inline-block' : ''" class="mb-2 py-4 w-full backdrop-blur-sm text-2xl md:text-3xl font-semibold text-white">Achievement</h1>
          <Achievements />
        </section>
        <!-- project -->
        <section id="project" class="mt-24">
          <h1 :class="isSticky ? 'sticky top-0 inline-block' : ''" class="mb-2 py-4 w-full backdrop-blur-sm text-2xl md:text-3xl font-semibold text-white">Projects</h1>
          <Projects />
        </section>
        <!-- addition -->
        <Additional />
      </div>
    </div>
  </div>
</template>

<script setup>
  const title = ref('My Portofolio');
  const isSticky = ref(false);

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    const h1Element = document.querySelector('h1');
    const rect = h1Element.getBoundingClientRect();
    isSticky.value = rect.top <= 0;
  }

  // function handleRightClick() {
  //   document.addEventListener('contextmenu', event => event.preventDefault());
  // }
</script>
