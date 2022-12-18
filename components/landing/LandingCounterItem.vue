<template>
  <div class="flex flex-col items-center gap-5 w-full md:w-80 py-5 md:py-0">
    <div class="flex items-center gap-5 font-bold font-spline">
      <p class="text-5xl text-h-purple">00</p>
      <p>
        <p class="text-h-light">{{ first }}</p>
        <p class="text-h-light">{{ second }}</p>
      </p>
    </div>
    <p class="text-h-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  first: string,
  second: string
}>()
</script>