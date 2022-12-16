<template>
  <div v-motion-dashboard class="min-h-screen w-full bg-h-dark-three">
    <div class="flex flex-col gap-15 dashboard-sizer">
      <DashboardHeader>
        <p class="text-lg text-h-light">Gerenciar Times</p>
      </DashboardHeader>
      <DashboardTeamView />
      <DashboardTeamActivity />
    </div>
  </div>
</template>

<script>
+ definePageMeta({ layout: 'dashboard' })
</script>