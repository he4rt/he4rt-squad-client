<template>
  <div class="flex[col] w:full scroll:hidden" v-motion-teams>
    <div class="flex[col gap-2.5rem] w:full m[t 1.25rem] h:30rem scroll[y auto]">
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
    <div class="flex[v-center h-center gap-2rem] w:full m[t 1.5rem]">
      <button
        @click="router.push('/dashboard')"
        class="bg:transparent p[1rem 4rem] rounded:0.5rem text[h-gray 1rem 700] border:white style:cursor-pointer"
      >
        Descartar
      </button>
      <button
        class="bg:h-second-purple p[1rem 2.5rem] rounded:0.5rem text[h-light 1rem 700] border:0 style:cursor-pointer"
      >
        Salvar alterações
      </button>
    </div>
  </div>
</template>
<script>
  ;+definePageMeta({ layout: 'team' })
</script>
