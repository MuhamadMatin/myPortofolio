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
      <!-- about -->
      <section id="about" class="my-24 text-slate-400">
        <h1 class="mb-4 text-2xl md:text-3xl font-semibold text-white">About Me</h1>
        <div>
          <p class="mb-4">
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
            <span class="text-slate-300 hover:text-teal-300 duration-200">learning various programming languages</span>. I want to know how each programming language works, the advantages and disadvantages I also want to develop my
            <span class="text-slate-300 hover:text-teal-300 duration-200">abilities in solving problems, collaborating with other people and so on</span>
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
      <!-- achievement -->
      <section id="achievement" class="my-24 text-slate-400">
        <h1 class="mb-4 text-2xl md:text-3xl font-semibold text-white">Achievement</h1>
        <Achievements />
      </section>
      <!-- project -->
      <section id="project" class="mt-24 text-slate-400">
        <h1 class="mb-4 text-2xl md:text-3xl font-semibold text-white">Projects</h1>
        <Projects/>
      </section>
      <!-- addition -->
      <Additional />
    </div>
  </div>
</template>

<script setup>
  const title = ref('My Portofolio');
</script>
