<template>
  <div
    class="flex:col h[max 1100px] scroll[y auto] w:full bg:h-dark-one rounded:0.5rem p[0 2.5rem 0 3rem] md(p[1.5rem 2.5rem 1.rem 3rem])"
  >
    <div class="flex[row ai-center]">
      <h2 class="text[inter h-light 700 xl] p[t 1.75rem]">Registro de Atividades</h2>
      <provider-icon-button @click="router.push('/dashboard/projects/create')">
        <IconAdd class="text:white h:2rem w:2rem m[2rem 0 0 0]" />
      </provider-icon-button>
    </div>
    <div class="flex[col gap-2.5rem] w:full m[t 2.5rem]">
      <DashboardTeamActivityItem
        :id="`${item.teamName}:${item.name}`"
        :title="item.name"
        :description="item.description"
        :color="item.status"
        :username="item.username"
        :username_image_url="item.image"
        :starAmount="item.stars.length"
        :repoUrl="item.repoUrl"
        v-for="(item, index) in data"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const global = useGlobalStore()

const { data } = await useAsyncData(
  'teams',
  () => $fetch(`http://localhost:3333/projects/${global.load.team.name}`, {
    method: 'GET'
  })
)

console.log(data)
</script>
