<template>
  <div v-motion-dashboard class="h[max 100vh] w:full bg:h-dark-three scroll[y auto]">
    <div class="dashboard-sizer flex[gap-3rem col]">
      <DashboardHeader> Olá, <span class="text[lg h-purple]">Neextur</span> </DashboardHeader>
      <p class="text[h-light dm-sans 700 3xl] m[t 2.5rem]">Seus times</p>
      <div class="flex[h-between v-start] w:full p[b 2.5rem] border[b h-divider 1px]">
        <p class="text[dm-sans 1rem h-gray] w:50%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales finibus faucibus. Nunc posuere.
        </p>
        <NuxtLink
          to="/dashboard/teams/control/register"
          class="flex[gap-0.5rem v-center h-between] typo[decoration-none] border[3px h-divider] text[h-gray 1rem 700] p:0.5rem rounded:0.5rem bg:transparent style:cursor-pointer"
        >
          <IconAdd class="w:1.5rem h:1.5rem" />
          Criar time
        </NuxtLink>
      </div>
      <div class="flex[wrap h-center v-center gap-1.5rem] w:full md(flex[wrap h-between v-center gap-1.5rem])">
        <TeamsItem />
        <TeamsItem />
        <TeamsItem />
      </div>
    </div>
  </div>
</template>

<script>
  definePageMeta({ layout: 'dashboard' })
</script>
