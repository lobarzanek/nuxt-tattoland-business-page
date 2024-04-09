<script setup>
const artists = [
  {
    name: "Natalia 'InkQueen' Nowak",
    description:
      "Natalia, znana również jako 'InkQueen', jest naszą mistrzynią detali. Jej niezwykła precyzja i umiejętność wyrażania emocji za pomocą igły sprawiają, że jej prace są prawdziwymi arcydziełami.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/05/16/woman-1867485_960_720.jpg",
    imgAlt: "Natalia 'InkQueen' Nowak",
  },
  {
    name: "Adam 'DarkInk' Kowalski",
    description:
      "Adam, nazywany również 'DarkInk', jest mistrzem w tworzeniu mrocznych i pełnych charakteru dzieł sztuki na ciele. Jego styl to połączenie realistycznych elementów z surrealistycznymi motywami.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/05/18/adult-1867489_960_720.jpg",
    imgAlt: "Adam 'DarkInk' Kowalski",
  },
];
</script>

<template>
  <h1 class="font-bold uppercase text-3xl text-center mb-4">Artyści</h1>
  <div class="m-4 text-center text-lg lg:mx-56">
    Poznaj naszych utalentowanych artystów, którzy sprawią, że Twój pomysł
    stanie się rzeczywistością. Każdy z nich ma swoje unikalne podejście i
    specjalizuje się w różnych stylach, ale razem tworzymy harmonijną pracownię,
    gdzie każdy klient czuje się wyjątkowo.
  </div>
  <div class="flex justify-center gap-8 flex-wrap m-4 lg:gap-24">
    <ArtistsCard
      v-for="a in artists"
      :name="a.name"
      :description="a.description"
      :imgSrc="a.imgSrc"
      :imgAlt="a.imgAlt"
    />
  </div>
</template>
