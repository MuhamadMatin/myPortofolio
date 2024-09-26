<script setup lang="ts">
  const route = useRequestURL().origin;
</script>

<template>
  <Head>
    <!-- ini merupakan cara menambahkan head pada Nuxt -->
    <Html lang="en" />
    <!-- Google verification -->
    <Title>Matin's Portfolio</Title>
    <Meta name="google-site-verification" content="ncQbs7NO4o7Kqbi52iJFLJwFkgho9AW43lM5F4YH694" />

    <!-- Meta umum untuk SEO -->
    <meta name="title" content="Muhamad Matin Portofolio" />
    <Meta name="description" content="Explore Matin's portfolio. This is the first portfolio website created using Nuxt.js, showcasing skills in web development." />
    <Meta name="keywords" content="matin, muhamad matin, Muhamad Matin, portofolio, Muhammad Matin, muhammad matin, Matin Portfolio, portfolio matin, Nuxt.js portfolio, web development, full stack developer, frontend, backend" />
    <Meta name="author" content="Matin" />
    <!-- Meta untuk mobile responsiveness -->
    <Meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Open Graph Meta untuk Facebook, LinkedIn, dll. -->
    <Meta property="og:title" content="Matin's Portfolio" />
    <Meta property="og:description" content="Explore Matin's portfolio. This is the first portfolio website created using Nuxt.js, showcasing skills in web development." />
    <Meta property="og:image" :content="`${route}/favicon.ico`" />
    <Meta property="og:type" content="website" />
    <Meta property="og:url" :content="route" />

    <!-- Meta untuk Twitter -->
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" content="Matin's Portfolio" />
    <Meta name="twitter:description" content="Explore Matin's portfolio. This is the first portfolio website created using Nuxt.js, showcasing skills in web development." />
    <Meta name="twitter:image" :content="`${route}/images/thumbnail.webp`" />
  </Head>
  <main class="bg-black text-text font-helvetica">
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
        <img class="hidden lg:block h-[7%] w-[7%]" src="/video/chip-unscreen.gif" alt="cip" />
      </div>
    </div>
    <img class="lg:hidden h-[15%] w-[15%] md:w-[5%] md:h-[5%]" src="/video/chip-unscreen.gif" alt="cip" />
  </main>
</template>
