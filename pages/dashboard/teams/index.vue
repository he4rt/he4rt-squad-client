<template>
  <div v-motion-dashboard class="min-h-screen w-full bg-h-dark-three">
    <div class="flex flex-col gap-12 dashboard-sizer">
      <DashboardHeader> Olá, <span class="font-bold text-lg text-h-purple">Neextur</span> </DashboardHeader>
      <p class="font-dm font-bold text-3xl mt-10 text-h-light">Seus times</p>
      <div class="flex w-full justify-between items-start pb-10 border-b border-h-divider">
        <p class="font-dm text-h-gray w-1/2 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales finibus faucibus. Nunc posuere.
        </p>
        <NuxtLink
          to="/dashboard/teams/control/register"
          class="flex gap-2 items-center no-underline justify-between border-3 border-h-divider text-h-gray font-bold p-2 rounded-lg bg-transparent cursor-pointer transition-colors hover:border-h-light hover:bg-h-light hover:text-h-second-purple"
        >
          <IconAdd class="w-6 h-6" />
          Criar time
        </NuxtLink>
      </div>
      <div class="flex flex-wrap w-full justify-center md:justify-between items-center gap-6">
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
