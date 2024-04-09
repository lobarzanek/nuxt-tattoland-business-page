<script setup></script>

<template>
  <div class="flex justify-center flex-col items-center gap-16">
    <div class="mt-8 md:mt-12 lg:mt-36">
      <p class="font-bold text-2xl text-center lg:text-5xl">
        Witaj w Tattoo<span class="text-flamingo">Land</span>!
      </p>
    </div>
    <div>Twoje miejsce, gdzie sztuka spotyka ciało.</div>
    <div class="flex flex-wrap gap-8 justify-center">
      <button
        @click="navigateTo({ path: '/offer' })"
        class="btn btn-outline w-5/6"
      >
        Poznaj naszą ofertę
      </button>
      <button
        @click="navigateTo({ path: '/artists' })"
        class="btn btn-outline w-5/6"
      >
        Poznaj naszych artystów
      </button>
    </div>
  </div>
</template>
