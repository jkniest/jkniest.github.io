<script setup lang="ts">
</script>

<template>
  <UPageHero
    title="Hi, I'm Jordan!"
    description="Currently working as Head of Development Shopware at basecom. In my spare time I'm working on open source stuff and write blog posts."
    orientation="horizontal"
    :reverse="true"
  >
    <img
      src="../assets/images/me.jpg"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    >
  </UPageHero>

  <USeparator />

  <ExperienceStepper />
</template>
