<template>
  <div v-motion-teams>
    <div class="flex flex-col gap-6 lg:w-1/2 w-full h-86 overflow-y-auto mt-10">
      <TeamsAcceptInvite />
      <TeamsAcceptInvite />
      <TeamsAcceptInvite />
    </div>
    <div class="text-center lg:w-1/2 w-full mt-5">
      <p class="text-h-second-purple font-bold cursor-pointer pb-10">ver mais</p>
    </div>
    <div class="flex gap-2 justify-between items-center lg:w-1/2 w-full py-5 border-t border-h-divider">
      <p class="text-h-gray font-dm-sans">
        Earth is the third planet from the Sun and the only astronomical object known to harbor life.
      </p>
      <button class="py-2 px-6 bg-h-second-purple text-h-light font-dm-sans font-bold rounded border-none">Gerar convite</button>
    </div>
  </div>
</template>

<script>
  ;+definePageMeta({ layout: 'team' })
</script>
