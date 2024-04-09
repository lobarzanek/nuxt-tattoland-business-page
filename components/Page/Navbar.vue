<script setup>
const pages = [
  {
    src: "/",
    name: "Home",
  },
  {
    src: "/artists",
    name: "Artyści",
  },
  {
    src: "/offer",
    name: "Oferta",
  },
  {
    src: "/ask",
    name: "Zapytaj o tatuaż",
  },
  {
    src: "/contact",
    name: "Kontakt",
  },
];
</script>
<template>
  <div class="navbar justify-between">
    <NuxtLink to="/">
      <SVGLogo class="h-12 w-48" />
    </NuxtLink>
    <div class="m-4">
      <NuxtLink class="px-4" v-for="page in pages" v-bind:to="page.src">{{
        page.name
      }}</NuxtLink>
    </div>
  </div>
</template>
