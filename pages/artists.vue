<script setup>
const artists = [
  {
    name: "Natalia 'Queen' Nowak",
    description:
      "Natalia, znana również jako 'Queen', jest naszą mistrzynią detali. Jej niezwykła precyzja i umiejętność wyrażania emocji za pomocą igły sprawiają, że jej prace są prawdziwymi arcydziełami.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/05/16/woman-1867485_960_720.jpg",
    imgAlt: "Natalia 'InkQueen' Nowak",
  },
  {
    name: "Adam 'Dark' Kowalski",
    description:
      "Adam, nazywany również 'Dark', jest mistrzem w tworzeniu mrocznych i pełnych charakteru dzieł sztuki na ciele. Jego styl to połączenie realistycznych elementów z surrealistycznymi motywami.",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/05/18/adult-1867489_960_720.jpg",
    imgAlt: "Adam 'DarkInk' Kowalski",
  },
];
</script>

<template>
  <PageTitle title="artyści" />
  <PageDescription>
    Poznaj naszych utalentowanych artystów, którzy sprawią, że Twój pomysł
    stanie się rzeczywistością. Każdy z nich ma swoje unikalne podejście i
    specjalizuje się w różnych stylach, ale razem tworzymy harmonijną pracownię,
    gdzie każdy klient czuje się wyjątkowo.
  </PageDescription>
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
