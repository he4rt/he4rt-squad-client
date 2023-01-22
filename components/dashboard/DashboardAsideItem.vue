<template>
  <NuxtLink
    class="flex[gap-5px h-center v-center] text[h-gray] typo[decoration-none] style[cursor-pointer] w:full p:1.25rem lg(p[1.25rem 0 1.25rem 2.5rem] flex[gap-1.5rem h-start v-center])"
    :to="to"
    exactActiveClass="bg:h-dark-two text[! h-light]"
  >
    <slot name="icon" />
    <div class="hidden-in-mobile">
      <slot />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  defineProps<{
    to: string
  }>()
</script>
