<template>
  <div class="flex[col v-center gap-5px] w:full p[1.25rem 0] md(w:20rem p[0rem 0])">
    <div class="flex[v-center gap-5px] text[1rem 700 spline-sans]">
      <p class="text[5xl h-purple]">00</p>
      <p>
        <p class="text:h-light">{{ first }}</p>
        <p class="text:h-light">{{ second }}</p>
      </p>
    </div>
    <p class="text:h-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  first: string,
  second: string
}>()
</script>