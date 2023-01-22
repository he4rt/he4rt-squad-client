<template>
  <div v-motion-teams>
    <div class="flex[col gap-1.5rem] w:full h:21.5rem scroll[y auto] m[t 2.5rem] lg(w:50%)">
      <TeamsAcceptInvite />
      <TeamsAcceptInvite />
      <TeamsAcceptInvite />
    </div>
    <div class="text:center w:full m[t 1.25rem] lg(w:50%)">
      <p class="text[h-second-purple 1rem 700] style:cursor-pointer p[b 2.5rem]">ver mais</p>
    </div>
    <div class="flex[gap-0.5rem h-between v-center] w:full p[1.25rem 0] lg(w:50%)">
      <p class="text[h-gray 1rem dm-sans]">
        Earth is the third planet from the Sun and the only astronomical object known to harbor life.
      </p>
      <button class="p[0.5rem 1.5rem] bg:h-second-purple text[h-light dm-sans 1rem 700] rounded:0.25rem border:0">Gerar convite</button>
    </div>
  </div>
</template>

<script>
  ;+definePageMeta({ layout: 'team' })
</script>
