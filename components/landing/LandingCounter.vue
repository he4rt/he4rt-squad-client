<template>
  <div
    class="flex[wrap v-center h-between] w:full border[t 2 h-dark-one] p[t 5rem] p[b 9rem]"
    v-motion="{
      initial: {
        opacity: 0,
        y: -50,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: 200,
          duration: 500,
        },
      },
    }"
  >
    <LandingCounterItem :data="data.teams" first="Equipes" second="formadas" description="Compartilhe seus projetos em equipe." />
    <LandingCounterItem :data="data.users" first="Membros" second="participando" description="Se torne um membro da comunidade." />
    <LandingCounterItem :data="data.projects" first="Projetos" second="realizados" description="Tire seus projetos do papel conosco." />
  </div>
</template>

<script setup lang="ts">
const teams = ref(0)
const members = ref(0)
const projects = ref(0)

const { data, error, refresh } = await useAsyncData(
  'values',
  () => $fetch('http://localhost:3333/landing', {
    method: 'GET'
  })
)



</script>