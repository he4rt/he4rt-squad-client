<template>
  <main class="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden antialiased bg-h-dark-three">
    <DashboardAside />
    <div class="flex-1 w-full min-h-screen">
      <slot />
    </div>
  </main>
  <Teleport to="body">
    <DashboardNotifications v-if="global.dashboard.notifications" />
  </Teleport>
</template>

<script setup lang="ts">
  import { useGlobalStore } from '~~/stores/global'

  const global = useGlobalStore()
</script>
