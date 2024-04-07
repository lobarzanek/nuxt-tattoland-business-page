<script setup>

const pages = [
    {
        src: "/",
        name: "Home"
    },
    {
        src: "/artists",
        name: "Artyści"
    },
    {
        src: "/offer",
        name: "Oferta"
    },
    {
        src: "/ask",
        name: "Zapytaj o tatuaż"
    },
    {
        src: "/contact",
        name: "Kontakt"
    },
]

</script>
<template>
<div>
    <NuxtLink v-for="page in pages" to="{{ page.src }}">{{ page.name }}</NuxtLink>
</div>
</template>