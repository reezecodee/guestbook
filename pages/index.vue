<template>
    <div class="grid grid-cols-[3fr_2fr] items-center h-full gap-x-14">
      <Message />
      <FormLogin />
    </div>
</template>

<script setup>
import FormLogin from '../components/forms/FormLogin.vue';
import Message from '../components/scroll/Message.vue';

useHead({
  title: 'Reeze | Guestbook App',
  meta: [
    { name: 'description', content: 'Guestbook Application with NuxtJS' }
  ]
})
</script>


<style scoped></style>