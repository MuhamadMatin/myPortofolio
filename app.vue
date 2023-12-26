<template>
  <!-- @click.right="handleRightClick()" -->
  <div class="bg-black text-text font-tes">
    <Head>
      <!-- ini merupakan cara menambahkan head pada Nuxt -->
      <Html lang="en" />
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div class="py-10 px-5 mx-auto md:max-w-md lg:max-w-xl">
      <h1 class="text-white text-4xl font-bold tracking-tight">Muhamad Matin Anugrah Pujayanto</h1>
      <h2 class="mt-4 leading-normal font-inter">
        Students with aspirations of becoming
        <span class="hover:text-teal-300 duration-200">full stack developers</span>
      </h2>
      <!-- about -->
      <section id="about" class="my-24">
        <h1 :class="isSticky ? 'sticky top-0 inline-block' : ''" class="mb-2 py-4 w-full backdrop-blur-sm text-3xl font-semibold text-white">About Me</h1>
        <About />
      </section>
      <section id="experience" class="my-24">
        <h1 :class="isSticky ? 'sticky top-0 inline-block' : ''" class="mb-2 py-4 w-full backdrop-blur-sm text-3xl font-semibold text-white">Experience</h1>
        <Experiences />
      </section>
      <!-- achievement -->
      <section id="achievement" class="my-24">
        <h1 :class="isSticky ? 'sticky top-0 inline-block' : ''" class="mb-2 py-4 w-full backdrop-blur-sm text-3xl font-semibold text-white">Achievement</h1>
        <Achievements />
      </section>
      <!-- project -->
      <section id="project" class="mt-24">
        <h1 :class="isSticky ? 'sticky z-10 top-0 inline-block' : ''" class="mb-2 py-4 w-full backdrop-blur-sm text-3xl font-semibold text-white">Projects</h1>
        <Projects />
      </section>
      <!-- video fish -->
      <div class="mb-3">
        <div class="pr-4 py-1.5 w-full" :class="isFooter ? 'flex justify-end' : 'flex justify-between'">
          <p v-if="!isFooter" class="text-left text-sm font-medium">
            Click arrow
          </p>
          <span @click="isFooter = !isFooter" v-if="!isFooter">
            <img class="h-5 w-5" src="./public/svg/up-arrow.svg" alt="up arrow" />
          </span>
          <span @click="isFooter = !isFooter" v-else>
            <img class="h-5 w-5" src="./public/svg/down-arrow.svg" alt="down arrow" />
          </span>
        </div>
        <span v-if="isFooter">
          <Footer />
        </span>
      </div>
      <!-- addition -->
      <Additional />
    </div>
  </div>
</template>

<script setup>
  const title = ref("Portfolio with Matin's");
  const isSticky = ref(false);
  const isFooter = ref(false);

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  await preloadComponents('Footer');

  function handleScroll() {
    const h1Element = document.querySelector('h1');
    const rect = h1Element.getBoundingClientRect();
    isSticky.value = rect.top <= 0;
  }

  // function handleRightClick() {
  //   document.addEventListener('contextmenu', event => event.preventDefault());
  // }
</script>
