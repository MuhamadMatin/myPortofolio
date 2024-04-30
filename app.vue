<template>
  <!-- @click.right="handleRightClick()" -->
  <div class="bg-black text-text font-helvetica">
    <Head>
      <!-- ini merupakan cara menambahkan head pada Nuxt -->
      <Html lang="en" />
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div class="pt-10 px-5 mx-auto md:pt-10 md:pb-5 md:max-w-md lg:p-0 lg:px-5 lg:grid lg:grid-cols-2 lg:max-w-full lg:h-screen">
      <div class="inline-block">
        <section id="name" class="flex items-center h-[100dvh]">
          <Name />
        </section>
      </div>
      <div class="lg:overflow-auto scrollbar-hide">
        <!-- about -->
        <section id="about" class="my-24">
          <h1 class="sticky top-0 inline-block mb-2 py-4 w-full backdrop-blur-sm text-3xl font-semibold text-white md:text-4xl">About Me</h1>
          <About />
        </section>
        <!-- experience -->
        <section id="experience" class="my-24">
          <h1 class="sticky top-0 inline-block mb-2 py-4 w-full backdrop-blur-sm text-3xl font-semibold text-white md:text-4xl">Experience</h1>
          <Experiences />
        </section>
        <!-- achievement -->
        <section id="achievement" class="my-24">
          <h1 class="sticky top-0 inline-block mb-2 py-4 w-full backdrop-blur-sm text-3xl font-semibold text-white md:text-4xl">Achievement</h1>
          <Achievements />
        </section>
        <!-- project -->
        <section id="project" class="mt-24">
          <h1 class="sticky z-10 top-0 inline-block mb-2 py-4 w-full backdrop-blur-sm text-3xl font-semibold text-white md:text-4xl">Projects</h1>
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
        <h1 :class="sticky z-10 top-0 inline-blockmb-2 py-4 w-full backdrop-blur-sm text-center text-3xl font-semibold text-white">Connect With Me</h1>
        <Footer />
      </section> -->
        <!-- addition -->
        <Additional />
        <img class="hidden lg:block h-[7%] w-[7%]" src="./public/video/chip-unscreen.gif" alt="cip" />
      </div>
    </div>
    <img class="lg:hidden h-[15%] w-[15%] md:w-[5%] md:h-[5%]" src="./public/video/chip-unscreen.gif" alt="cip" />
  </div>
</template>

<script setup>
  const title = ref("Matin's Portfolio");
</script>
