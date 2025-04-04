<template>
  <NuxtLayout>
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
      <section id="experiences" class="my-24">
        <h1 class="sticky top-0 inline-block w-full py-4 mb-2 text-3xl font-semibold text-white backdrop-blur-sm md:text-4xl">Experience</h1>
        <Experiences />
      </section>
      <section id="educations" class="my-24">
        <h1 class="sticky top-0 inline-block w-full py-4 mb-2 text-3xl font-semibold text-white backdrop-blur-sm md:text-4xl">Education</h1>
        <Educations />
      </section>
      <!-- achievement -->
      <section id="achievements" class="my-24">
        <h1 class="sticky top-0 inline-block w-full py-4 mb-2 text-3xl font-semibold text-white backdrop-blur-sm md:text-4xl">Achievement</h1>
        <Achievements />
      </section>
      <!-- project -->
      <section id="projects" class="my-24">
        <h1 class="sticky top-0 z-10 inline-block w-full py-4 mb-2 text-3xl font-semibold text-white backdrop-blur-sm md:text-4xl">Projects</h1>
        <Projects />
      </section>
      <!-- <footer /> -->
      <!-- addition -->
      <Additional />
      <!-- chip around -->
      <img class="hidden lg:block h-[7%] w-[7%]" src="/video/chip-unscreen.gif" alt="cip" />
    </div>
    <!-- chip around -->
    <img class="lg:hidden h-[15%] w-[15%] md:w-[5%] md:h-[5%]" src="/video/chip-unscreen.gif" alt="cip" />
  </NuxtLayout>
</template>
