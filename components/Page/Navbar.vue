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

const handleHideMenu = ref(false);
</script>
<template>
  <div class="navbar justify-between bg-opacity-20 bg-neutral-950 mb-4">
    <NuxtLink to="/">
      <SVGLogo class="h-12 w-48" />
    </NuxtLink>
    <div class="flex m-4">
      <button
        @click="() => (handleHideMenu = !handleHideMenu)"
        class="md:hidden p-2 font-bold z-20"
      >
        {{ handleHideMenu ? "X" : "=" }}
      </button>
      <div :class="{ 'hidden': !handleHideMenu }" class="z-10 bg-neutral-950 bg-opacity-90 h-dvh w-dvw fixed top-0 left-0 md:hidden"></div>
      <div :class="{ 'hidden': !handleHideMenu }" class="z-10 absolute max-h-dvh top-28 left-12 flex flex-col gap-8 md:block md:max-w-max md:max-h-max md:relative md:top-0 md:left-0">
        <NuxtLink
          class="font-bold px-4 py-2 rounded-md md:font-normal md:hover:font-bold hover:text-neutral-50"
          v-for="page in pages"
          v-bind:to="page.src"
          @click="() => (handleHideMenu = !handleHideMenu)"
          >{{ page.name }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
