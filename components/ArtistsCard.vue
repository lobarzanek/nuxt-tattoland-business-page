<script setup>
defineProps({
  name: {
    type: String,
    default: () => "",
  },
  description: {
    type: String,
    default: () => "",
  },
  imgSrc: {
    type: String,
    default: () => "",
  },
  imgAlt: {
    type: String,
    default: () => "",
  },
});
</script>

<template>
  <div class="max-w-sm rounded-xl overflow-hidden shadow-lg">
    <img class="w-full" :src="imgSrc" :alt="imgAlt" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ name }}</div>
      <p class="text-black-700 text-base">
        {{ description }}
      </p>
    </div>
  </div>
</template>
