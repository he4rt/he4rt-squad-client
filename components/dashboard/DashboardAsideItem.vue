<template>
  <NuxtLink class="flex pl-10 gap-3 no-underline items-center text-h-gray w-full py-5 hover:bg-h-dark-two hover:text-h-light cursor-pointer" :to="to" exactActiveClass="bg-h-dark-two !text-h-light">
    <slot name="icon" />
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>