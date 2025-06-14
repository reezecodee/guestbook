<template>
    <div>
        <h1 class="text-red-500">{{ message }}</h1>
    </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('/api/guestbook')

const message = computed(() => {
    if (pending.value) return 'Loading...'
    if (error.value) return 'Error'
    return data.value?.message
})

useHead({
  title: 'Login | Guestbook App',
  meta: [
    { name: 'description', content: 'Halaman login untuk aplikasi guestbook' }
  ]
})
</script>


<style scoped></style>