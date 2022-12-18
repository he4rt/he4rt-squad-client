<template>
  <div class="flex flex-col w-full bg-h-dark-one rounded px-0 md:px-5 py-10">
    <div class="flex items-center justify-between w-full border-b border-h-divider pb-2">
      <div class="flex gap-5 items-start justify-start ml-5 md:ml-0">
        <img class="rounded-full w-14 h-14 border-2 border-h-gray hidden md:flex" src="https://i.imgur.com/vlU6ZAZ.jpg" />
        <div class="flex flex-col gap-3">
          <p class="text-xl font-bold text-h-light font-inter">Tropa do Poze</p>
          <p class="text-h-light font-dm">Projeto Atual: <span class="text-h-gray">He4rt</span></p>
          <p class="text-h-gray font-dm">Squad</p>
        </div>
        <p class="bg-h-purple text-h-light p-1 text-xs font-bold rounded font-dm">Nv.157</p>
      </div>
      <div class="flex items-center gap-5 mr-5 md:mr-0">
        <ProviderIconButton>
          <IconAlert class="w-5 h-5" />
        </ProviderIconButton>
        <ProviderIconButton>
          <IconGear class="w-5 h-5" />
        </ProviderIconButton>
        <IconAction>
          <IconTrash class="w-6 h-6 text-red-600 hover:text-red-900 transition-colors" />
        </IconAction>
      </div>
    </div>
    <div class="flex flex-col gap-3 justify-center items-center w-full py-10 border-b border-h-divider">
      <div class="p-0.6 flex items-center justify-center rounded-full bg-gradient-to-t from-h-second-purple to-h-purple">
        <img class="rounded-full w-24 h-24" src="https://i.imgur.com/vlU6ZAZ.jpg" />
      </div>
      <p class="text-h-light font-bold">MC Poze do Rodo</p>
      <p class="text-h-gray">Chefe</p>
    </div>
    <div class="flex flex-wrap md:flex-nowrap items-start justify-between w-full">
      <DashboardTeamUser url="https://i.imgur.com/vlU6ZAZ.jpg" name="NexturHe4rt" type="UI/UX" />
      <DashboardTeamUser url="https://i.imgur.com/vlU6ZAZ.jpg" name="JoaozinHe4rt" type="Front End" />
      <DashboardTeamUser name="ChiquinHe4rt" type="Back End" />
      <DashboardTeamUser />
    </div>
  </div>
</template>
