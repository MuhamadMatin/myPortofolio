<template>
  <!-- @click.right="handleRightClick()" -->
  <div class="bg-black text-text font-helvetica">
    <Head>
      <!-- ini merupakan cara menambahkan head pada Nuxt -->
      <Html lang="en" />
      <Meta name="google-site-verification" content="6gucaetBogbZLPwhjxeSyVHzrCtMNq6mlzvHsaXtsUY" />
    </Head>
    <div class="px-5 pt-10 mx-auto md:pt-10 md:pb-5 md:max-w-md lg:p-0 lg:px-5 lg:grid lg:grid-cols-2 lg:max-w-full lg:h-screen">
      <div class="inline-block">
        <section id="name" class="flex items-center h-[100dvh]">
          <Name />
        </section>
      </div>
      <div class="lg:overflow-auto scrollbar-hide">
        <!-- about -->
        <section id="about" class="my-24">
          <h1 class="sticky top-0 inline-block w-full py-4 mb-2 text-3xl font-semibold text-white backdrop-blur-sm md:text-4xl">About Me</h1>
          <About />
        </section>
        <!-- experience -->
        <section id="experience" class="my-24">
          <h1 class="sticky top-0 inline-block w-full py-4 mb-2 text-3xl font-semibold text-white backdrop-blur-sm md:text-4xl">Experience</h1>
          <Experiences />
        </section>
        <!-- achievement -->
        <section id="achievement" class="my-24">
          <h1 class="sticky top-0 inline-block w-full py-4 mb-2 text-3xl font-semibold text-white backdrop-blur-sm md:text-4xl">Achievement</h1>
          <Achievements />
        </section>
        <!-- project -->
        <section id="project" class="mt-24">
          <h1 class="sticky top-0 z-10 inline-block w-full py-4 mb-2 text-3xl font-semibold text-white backdrop-blur-sm md:text-4xl">Projects</h1>
          <Projects />
        </section>
        <!-- video fish -->
        <!-- <div class="mb-3">
          <div class="pr-4 py-1.5 w-full" :class="isFooter ? 'flex justify-end' : 'flex justify-between'">
          <p v-if="!isFooter" class="text-sm font-medium text-left">
            Click arrow
          </p>
          <span @click="isFooter = !isFooter" v-if="!isFooter">
            <img class="w-5 h-5" src="./public/svg/up-arrow.svg" alt="up arrow" />
          </span>
          <span @click="isFooter = !isFooter" v-else>
            <img class="w-5 h-5" src="./public/svg/down-arrow.svg" alt="down arrow" />
          </span>
        </div>
        <span v-if="isFooter">
          <Footer />
        </span>
      </div> -->
        <!-- <section id="connect" class="mb-5 mt-28 md:my-20">
        <h1 :class="sticky top-0 z-10 w-full py-4 text-3xl font-semibold text-center text-white inline-blockmb-2 backdrop-blur-sm">Connect With Me</h1>
        <Footer />
      </section> -->
        <!-- addition -->
        <Additional />
        <img class="hidden lg:block h-[7%] w-[7%]" src="../public/video/chip-unscreen.gif" alt="cip" />
      </div>
    </div>
    <img class="lg:hidden h-[15%] w-[15%] md:w-[5%] md:h-[5%]" src="../public/video/chip-unscreen.gif" alt="cip" />
  </div>
</template>

<script setup>
  const title = ref('');
</script>

<script setup lang="ts">
  useSeoMeta({
    title: `Matin's Portfolio`,
    ogTitle: `Matin's Portfolio`,
    description: 'This is my first portfolio website that I built using Nuxt.',
    ogDescription: 'This is my first portfolio website that I built using Nuxt.',
    // ogImage: 'https://example.com/image.png',
    // twitterCard: 'summary_large_image',
  });
</script>
