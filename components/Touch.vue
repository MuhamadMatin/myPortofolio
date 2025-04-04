<script setup>
  const supabase = useSupabaseClient();
  const email = ref('');
  const comment = ref('');
  async function tes() {
    const { data, error } = await supabase.from('contacts').insert({ email: email.value, message: comment.value });
    error ? alert('error') : alert('berhasil');
  }
</script>

<template>
  <form class="w-full mx-auto">
    <!-- <label for="email-address-icon" class="block my-2 text-sm font-medium text-white">Your Email</label> -->
    <div class="relative my-2">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <svg class="w-4 h-4 text-gray-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
        </svg>
      </div>
      <input type="text" v-model="email" class="bg-text border-0 outline-0 text-gray-950 text-sm rounded-md block w-full ps-10 p-2.5 placeholder-gray-950" placeholder="name@gmail.com" />
    </div>
    <!-- <label for="message" class="block my-2 text-sm font-medium text-white">Your message</label> -->
    <textarea id="message" v-model="comment" rows="8" resize-none class="block my-2 p-2.5 w-full text-sm text-gray-950 border-0 bg-text resize-none outline-0 rounded-md placeholder-gray-950" placeholder="Leave a comment..."></textarea>
    <div class="flex justify-end">
      <button type="button" @click="tes" class="group mt-2 py-2 md:py-2.5 px-4 md:px-5 bg-gray-900 text-sm duration-100 font-medium rounded-md text-gray-400 border-0 hover:text-white hover:bg-gray-700">
        Send <span class="inline-block duration-100 group-hover:-translate-y-1 group-hover:translate-x-1">🚀</span>
      </button>
    </div>
  </form>
</template>
