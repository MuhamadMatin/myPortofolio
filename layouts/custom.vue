<template>
  <div class="px-5 pt-10 pb-5 mx-auto lg:px-5 scrollbar-hide lg:max-w-screen-lg">
    <NuxtLink
      class="flex px-12 py-2 mb-5 space-x-2 text-sm font-medium align-middle duration-100 bg-gray-900 rounded-full cursor-pointer justify-items-center group lg:px-15 lg:py-4 hover:text-white hover:bg-gray-800 w-fit lg:text-base gap-x-1"
      to="/">
      <Icon class="inline-block w-5 h-5 duration-100 group-hover:text-teal-500 group-hover:-translate-x-2" name="pajamas:go-back" />
      Back
    </NuxtLink>
    <div class="grid justify-center grid-cols-1 col-span-2 gap-6 mx-auto md:grid-cols-2">
      <slot />
    </div>
  </div>
</template>
