<template>
  <aside
    class="pos[fixed top-0 right-0] p[1.25rem 0.5rem] flex[col v-center gap-2rem] bg:h-dashboard-aside filter[backdrop blur-16px] h:100vh scroll:y w:full z:999999 md(w:400px)"
  >
    <div @click.prevent.stop="global.dashboard.notifications = false" class="flex[v-center h-end] w:full style:cursor-pointer">
      <IconClose class="pos:relative h:2rem w:2rem text:h-light" />
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
  const global = useGlobalStore()
</script>
