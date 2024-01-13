<template>
  <!-- @click.right="handleRightClick()" -->
  <div class="bg-black text-text font-tes">
    <Head>
      <!-- ini merupakan cara menambahkan head pada Nuxt -->
      <Html lang="en" />
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div class="pt-10 px-5 mx-auto md:pt-10 md:pb-5 lg:max-w-xl">
      <section id="name" class="flex items-center h-[100dvh]">
        <Name />
      </section>
      <!-- about -->
      <section id="about" class="my-24">
        <h1 :class="isSticky ? 'sticky top-0 inline-block' : ''" class="mb-2 py-4 w-full backdrop-blur-sm text-3xl font-semibold text-white">About Me</h1>
        <About />
      </section>
      <!-- experience -->
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
      <!-- <div class="mb-3">
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
      </div> -->
      <!-- <section id="connect" class="mt-28 mb-5 md:my-20">
        <h1 :class="isSticky ? 'sticky z-10 top-0 inline-block' : ''" class="mb-2 py-4 w-full backdrop-blur-sm text-center text-3xl font-semibold text-white">Connect With Me</h1>
        <Footer />
      </section> -->
      <!-- addition -->
      <Additional />
    </div>
    <img class="h-[15%] w-[15%] md:w-[5%] md:h-[5%]" src="./public/video/chip-unscreen.gif" alt="cip" />
    <!-- <svg class="fill-white" width="150" height="150">
      <defs>
        <path id="path" d="M 15, 75 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
      </defs>

      <image href="./public/video/chip-unscreen.gif" x="45" y="45" height="60px" width="60px" />

      <text font-size="15">
        <textPath xlink:href="#path">Teks Mengelilingi GIF</textPath>
      </text>
    </svg> -->
  </div>
</template>

<script setup>
  const title = ref("Matin's Portfolio");
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
