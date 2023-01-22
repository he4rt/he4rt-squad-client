<template>
  <div class="flex[col v-center gap-1.25rem] w:17.125rem bg:h-dark-one text:dm-sans p:1.25rem rounded:0.5rem">
    <ProviderIconButton>
      <IconDots class="pos[relative left-7rem] tr[rotate-90deg] h:1.5rem w:1.5rem" />
    </ProviderIconButton>
    <img class="rounded:9999px w:6rem h:6rem border[2 h-divider solid]" src="https://i.imgur.com/vlU6ZAZ.jpg" />
    <p class="text[h-light lg 700]">Tropa do poze</p>
    <p class="text[center h-gray] p[1.25rem 0.5rem]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div class="flex[v-center h-between] w:100% m[b 1.25rem]">
      <div class="flex[col gap-1.25rem]">
        <p class="text[h-light 1rem 700]">Projeto Atual:</p>
        <p class="text:h-gray">He4rt Squad</p>
      </div>
      <div class="flex[col gap-1.25rem]">
        <p class="text[h-light 1rem 700]">Nvl</p>
        <p class="text:h-gray">157</p>
      </div>
    </div>
    <NuxtLink
      class="typo[decoration-none] flex:h-center text[1rem h-light dm-sans 500] w:full p[0.875rem 0] border:0 bg:h-second-purple rounded:0.5rem m[b 0.25rem] style:cursor-pointer"
      to="/dashboard/teams/id"
    >
      Ver equipe
    </NuxtLink>
  </div>
</template>
