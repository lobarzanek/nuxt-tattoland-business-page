<script setup>
defineProps({
  title: {
    type: String,
    default: () => "",
  }
});
</script>

<template>
  <h1 class="font-bold uppercase text-3xl text-center mb-4">
    {{ title }}
  </h1>
</template>