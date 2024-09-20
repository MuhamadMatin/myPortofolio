<script setup lang="ts">
  import type { Title } from '#build/components';
</script>

<template>
  <Head>
    <!-- ini merupakan cara menambahkan head pada Nuxt -->
    <Html lang="en" />
    <!-- Google verification -->
    <Title>Matin's Portfolio</Title>
    <Meta name="google-site-verification" content="ncQbs7NO4o7Kqbi52iJFLJwFkgho9AW43lM5F4YH694" />

    <!-- Meta umum untuk SEO -->
    <Meta name="description" content="Explore Matin's portfolio. This is the first portfolio website created using Nuxt.js, showcasing skills in web development." />
    <Meta name="keywords" content="Matin Portfolio, Nuxt.js portfolio, Muhamad Matin, muhamad matin, web development, full stack developer, frontend, backend" />
    <Meta name="author" content="Matin" />
    <!-- Meta untuk mobile responsiveness -->
    <Meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Open Graph Meta untuk Facebook, LinkedIn, dll. -->
    <Meta property="og:title" content="Matin's Portfolio" />
    <Meta property="og:description" content="Explore Matin's portfolio. This is the first portfolio website created using Nuxt.js, showcasing skills in web development." />
    <Meta property="og:image" content="https://example.com/portfolio-image.png" />
    <Meta property="og:type" content="website" />
    <Meta property="og:url" content="https://yourportfolio.com" />

    <!-- Meta untuk Twitter -->
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" content="Matin's Portfolio" />
    <Meta name="twitter:description" content="Explore Matin's portfolio. This is the first portfolio website created using Nuxt.js, showcasing skills in web development." />
    <Meta name="twitter:image" content="https://example.com/portfolio-image.png" />
  </Head>
  <NuxtPage />
</template>
