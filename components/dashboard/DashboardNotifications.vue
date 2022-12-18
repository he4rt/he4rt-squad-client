<template>
  <aside
    class="fixed px-2 py-5 flex items-center flex-col gap-10 top-0 right-0 bg-h-dashboard-aside backdrop-blur h-screen overflow-y-auto w-full md:w-100 z-999999"
  >
    <div @click.prevent.stop="global.dashboard.notifications = false" class="flex w-full justify-end cursor-pointer">
      <IconClose class="relative h-8 w-8 text-h-light" />
    </div>
    <MaterialCard
      title="Notificação da He4rt"
      description="Earth is the third planet from the Sun and the only..."
      color="he4rt"
    />
    <MaterialCard title="Notificação da He4rt" description="Earth is the third planet from the Sun and the only..." />
    <MaterialCard
      title="Notificação da He4rt"
      description="Earth is the third planet from the Sun and the only..."
      color="success"
    />
  </aside>
</template>

<script setup lang="ts">
  import { useGlobalStore } from '~~/stores/global'

  const global = useGlobalStore()
</script>
