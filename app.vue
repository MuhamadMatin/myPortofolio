<template>
  <div>
    <Head>
      <!-- ini merupakan cara menambahkan head pada Nuxt -->
      <Html lang="en" />
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div class="px-5 py-10 mx-auto md:max-w-md lg:max-w-xl">
      <h1 class="text-4xl font-bold tracking-tight text-slate-200">Muhamad Matin Anugrah Pujayanto</h1>
      <h2 class="mt-4 leading-normal text-slate-400 font-inter">
        Students with aspirations of becoming
        <span class="text-slate-300 hover:text-teal-300 duration-200">full stack developers</span>
      </h2>
      <section id="about" class="my-24 text-slate-400">
        <h1 class="mb-4 text-2xl md:text-3xl font-semibold text-white">About Me</h1>
        <div>
          <p class="mb-4 text-lg">
            I am a student who dreams of becoming a
            <span class="text-slate-300 hover:text-teal-300 duration-200">full stack developer</span>, namely someone who can develop a website from start to finish by mastering the various technologies and tools needed
          </p>
          <p class="mb-4">
            In in
            <span class="text-slate-300 hover:text-teal-300 duration-200">2021</span>
            I decided to continue my studies at a
            <span class="text-slate-300 hover:text-teal-300 duration-200">vocational school</span>. I would like to take advantage of this opportunity to
            <span class="text-slate-300 hover:text-teal-300 duration-200">improve my knowledge and skills</span>
          </p>
          <p class="mb-4">
            My main focus is
            <span class="text-slate-300 hover:text-teal-300 duration-200">learning various programming languages</span>
            used in the computer world. I want to know how each programming language works, the advantages and disadvantages I also want to develop my
            <span class="text-slate-300 hover:text-teal-300 duration-200">ability to solve problems, think logically, and collaborate with other people.</span>
          </p>
        </div>
      </section>
      <section id="experience" class="my-24 text-slate-400">
        <h1 class="mb-4 text-2xl md:text-3xl font-semibold text-white">Experience</h1>
        <div>
          <header>2021 — Present</header>
          <h2 class="mb-4 font-bold text-slate-200">Student at vocational school</h2>
          <p class="text-sm md:text-base">
            I am a student at a vocational school whose goal is to learn various programming languages and the understanding needed to become a reliable programmer. I learned about basic concepts, syntax, and logic of programming languages
            such as PHP, Java, JavaScript, and others. I also learned about how to apply these programming languages to create applications, web and other projects. I hope that by studying at this vocational school, I can develop my
            potential and interest in the field of programming.
          </p>
        </div>
      </section>
      <section id="project" class="mt-24 text-slate-400">
        <h1 class="mb-4 text-2xl md:text-3xl font-semibold text-white">Projects</h1>
        <div class="mb-12" v-for="exp in experience" :key="exp">
          <img class="rounded-md" :src="`/images/${exp.image}`" alt="image in experience" />
          <div>
            <NuxtLink :to="`${exp.URL}`" target="blank" class="mt-1 mb-2 w-fit md:text-lg text-slate-200 font-semibold hover:text-teal-300 duration-200">
              {{ exp.name }}
            </NuxtLink>
            <p class="text-xs md:text-base text-slate-400">
              {{ exp.desk }}
            </p>
            <div class="mt-2 flex space-x-2">
              <img v-for="svg in exp.svg" :key="svg" class="w-6 h-6" :src="`/svg/${svg}`" loading="lazy" alt="svg image" />
            </div>
          </div>
        </div>
      </section>
      <!-- addition -->
      <div class="mt-0 text-xs text-slate-400">
        This website was created using the <span class="duration-200 hover:text-teal-400"><NuxtLink :to="`${nuxt}`" target="blank">Nuxt</NuxtLink></span> framework and created using
        <span class="duration-200 hover:text-cyan-400"><NuxtLink :to="`${tailwindcss}`" target="blank"> Tailwind</NuxtLink></span
        >. Published using
        <span class="duration-200 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-white bg-clip-text hover:text-transparent"> <NuxtLink :to="`${netlify}`" target="blank">Netlify</NuxtLink></span>
      </div>
    </div>
  </div>
</template>

<script setup>
  const nuxt = 'https://nuxt.com/';
  const tailwindcss = 'https://tailwindcss.com/';
  const netlify = 'https://www.netlify.com/';
  const title = ref('My Portofolio');
  const experience = [
    {
      name: 'Nuxt blog',
      desk: 'I created a blog using the Nuxt Content from Nuxt.js as a means to learn the Nuxt module. The nuxt content is one of many modules available in Nuxt.js, a framework based on Vue.js. I can write my blog content using .md, .yml, .csv or .json. By creating this blog, I can improve my knowledge and skills about Nuxt.js and its modules',
      image: 'blog.webp',
      svg: ['nuxt.svg', 'tailwind-css.svg'],
      URL: 'https://learnuxtblog.netlify.app/',
    },
    {
      name: 'Image Search with Unsplash API',
      desk: 'I created a website that displays various interesting photos from the Unsplash API. I used documentation provided by various sources to learn how to access and process data from the API',
      image: 'image.webp',
      svg: ['html.svg', 'css.svg', 'js.svg'],
      URL: 'https://metallyleopart.github.io/ImageSearch/',
    },
    {
      name: 'QR Generate',
      desk: 'I created a website that can generate QR codes from text and URLs using the API from https://goqr.me/api/. I leveraged the documentation available on the website to understand how to send requests and receive responses from the API',
      image: 'qr.webp',
      svg: ['html.svg', 'css.svg', 'js.svg'],
      URL: 'https://metallyleopart.github.io/GenerateQR/',
    },
    {
      name: 'Quiz web',
      desk: 'I created a quiz website that can test users knowledge and insight on various topics. I use web technologies such as HTML, CSS, and JavaScript to create interactive and responsive interfaces',
      image: 'quiz.webp',
      svg: ['html.svg', 'css.svg', 'js.svg'],
      URL: 'https://metallyleopart.github.io/Question/',
    },
  ];
</script>
