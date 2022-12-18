<template>
  <header class="flex justify-between items-center w-full">
    <p class="font-bold text-lg text-h-light"><slot /></p>
    <div class="flex gap-5 items-center">
      <ProviderIconButton @click.prevent.stop="global.dashboard.notifications = true">
        <IconAlert class="w-7 h-7 cursor-pointer" />
      </ProviderIconButton>
      <div class="h-8 w-0.5 bg-h-divider" />
      <p class="ml-5 text-h-light">NeexTuRHe4rt</p>
      <img class="w-12 h-12 rounded-full" src="https://i.imgur.com/vlU6ZAZ.jpg" />
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useGlobalStore } from '~~/stores/global'

  const global = useGlobalStore()
</script>
