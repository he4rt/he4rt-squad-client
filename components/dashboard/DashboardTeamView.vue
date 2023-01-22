<template>
  <div class="flex[col] w:full bg:h-dark-one rounded:0.25rem p[2.5rem 0] md(p[2.5rem 1.25rem])">
    <div class="flex[v-center h-between] w:full p[b 0.5rem]">
      <div class="flex[gap-1.25rem v-start h-start] m[l 1.25rem] md(m[l 0])">
        <img
          class="hidden-in-mobile rounded:9999px w:3.5rem h:3.5rem border[2px h-gray solid]"
          src="https://i.imgur.com/vlU6ZAZ.jpg"
        />
        <div class="flex[col gap-3px]">
          <p class="text[xl 700 h-light inter]">Tropa do Poze</p>
          <p class="text[h-light dm-sans]">Projeto Atual: <span class="text:h-gray">He4rt</span></p>
          <p class="text[h-gray dm-sans]">Squad</p>
        </div>
        <p class="bg:h-purple text[h-light xs 700 dm-sans] p:0.25rem rounded:0.5rem">Nv.157</p>
      </div>
      <div class="flex[v-center gap-1.25rem] m[r 1.25rem] md(m:0)">
        <ProviderIconButton>
          <IconAlert class="w:1.25rem h:1.25rem" />
        </ProviderIconButton>
        <ProviderIconButton>
          <IconGear class="w:1.25rem h:1.25rem" />
        </ProviderIconButton>
        <IconAction>
          <IconTrash class="w:1.5rem h:1.5rem text:#CC0000" />
        </IconAction>
      </div>
    </div>
    <div class="flex[col gap-3px v-center h-center] w:full p[2.5rem 0]">
      <div class="p:0.15rem flex[v-center h-center] rounded:9999px">
        <img class="rounded:9999px w:5rem h:5rem outline[2 h-second-purple solid]" src="https://i.imgur.com/vlU6ZAZ.jpg" />
      </div>
      <p class="text[h-light 1rem 700]">MC Poze do Rodo</p>
      <p class="text:h-gray">Chefe</p>
    </div>
    <div class="flex[wrap v-center h-between] md(flex[nowrap v-center h-between]) w:full">
      <DashboardTeamUser url="https://i.imgur.com/vlU6ZAZ.jpg" name="NexturHe4rt" type="UI/UX" />
      <DashboardTeamUser url="https://i.imgur.com/vlU6ZAZ.jpg" name="JoaozinHe4rt" type="Front End" />
      <DashboardTeamUser name="ChiquinHe4rt" type="Back End" />
      <DashboardTeamUser />
    </div>
  </div>
</template>
