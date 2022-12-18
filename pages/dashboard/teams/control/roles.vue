<template>
  <div class="flex flex-col w-full overflow-hidden" v-motion-teams>
    <div class="flex flex-col gap-10 w-full mt-5 h-120 overflow-y-auto">
      <TeamsAcceptRoles />
      <TeamsAcceptRoles />
      <TeamsAcceptRoles />
      <TeamsAcceptRoles />
      <TeamsAcceptRoles />
      <TeamsAcceptRoles />
      <TeamsAcceptRoles />
      <TeamsAcceptRoles />
      <TeamsAcceptRoles />
      <TeamsAcceptRoles />
    </div>
    <div class="flex items-center w-full justify-center gap-8 mt-10 font-inter">
      <button
        @click="router.push('/dashboard')"
        class="bg-transparent py-4 px-16 border-3 border-h-divider rounded-lg text-h-gray font-bold cursor-pointer"
      >
        Descartar
      </button>
      <button
        class="bg-h-second-purple py-4 px-10 border-3 border-h-second-purple rounded-lg text-h-light font-bold cursor-pointer"
      >
        Salvar alterações
      </button>
    </div>
  </div>
</template>
<script>
  ;+definePageMeta({ layout: 'team' })
</script>
