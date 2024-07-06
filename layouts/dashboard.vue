<template>
  <main class="flex:col h[min 100vh] w:full scroll:hidden bg:h-dark-three lg(flex:row)">
    <DashboardAside />
    <div class="flex[? flex-1] w:full h[max 100vh]">
      <slot />
    </div>
    <Teleport to="body">
      <DashboardNotifications v-if="global.dashboard.notifications" />
    </Teleport>
  </main>
</template>

<script setup lang="ts">
  import { useGlobalStore } from '~~/stores/global'

  const global = useGlobalStore()

  definePageMeta({
    middleware: ["auth"]
  })
</script>
