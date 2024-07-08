<template>
  <div v-motion-dashboard class="h[max 100vh] w:full bg:h-dark-three scroll[y auto]">
    <div class="dashboard-sizer p:1rem flex[col gap-3.75rem] lg(p[5rem 10rem])">
      <DashboardHeader>
        <p class="text[h-light lg]">Gerenciar Times</p>
      </DashboardHeader>
      <DashboardTeamView />
      <DashboardTeamActivity />
    </div>
  </div>
</template>

<script>
  definePageMeta({ layout: 'dashboard', middleware: ["auth"] })
</script>
