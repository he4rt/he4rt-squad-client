<template>
  <div class="flex[col] w:full bg:h-dark-one rounded:0.25rem p[2.5rem 0] md(p[2.5rem 1.25rem])">
    <div class="flex[v-center h-between] w:full p[b 0.5rem]">
      <div class="flex[gap-1.25rem v-start h-start] m[l 1.25rem] md(m[l 0])">
      <img
          class="hidden-in-mobile rounded:9999px w:3.5rem h:3.5rem border[2px h-gray solid]"
          :src="global.load.team.image"
        />
        <div class="flex[col gap-3px]">
          <p class="text[xl 700 h-light inter]">{{ global.load.team.name }}</p>
        </div>
      </div>
    </div>
    <div class="flex[col gap-3px v-center h-center] w:full p[2.5rem 0]">
      <div class="p:0.15rem flex[v-center h-center] rounded:9999px">
        <img class="rounded:9999px w:5rem h:5rem outline[2 h-second-purple solid]" :src="owner?.imageUrl || 'https://i.imgur.com/vlU6ZAZ.jpg'" />
      </div>
      <p class="text[h-light 1rem 700]">{{ owner?.displayName || 'GUEST' }}</p>
      <p class="text:h-gray">Chefe</p>
    </div>
    <div class="flex[wrap v-center h-between] md(flex[nowrap v-center h-between]) w:full">
      <DashboardTeamUser v-for="item in members" :key="item.displayName" :url="item.image_url" :name="item.displayName" />
      <DashboardTeamUser :teamName="global.load.team.name" v-if="members.length < 4 && global.load.team.ownerId === auth.session.uid" />
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const global = useGlobalStore()
const auth = useAuthStore()
const owner = ref(null)
const members = ref([])

onMounted(async() => {
  const { data, error } = await useFetch(`/teams/owner/${global.load.team.name}`, {
    baseURL: 'http://localhost:3333',
    method: 'GET'
  })

  owner.value = data.value[0]

  data.value.shift()

  data.value = data.value.filter((obj, index, self) =>
    index === self.findIndex((t) => (
      t.id === obj.id
    )))

  members.value = data.value
})

const onDeleteTeam = async () => {
  await useFetch(`/teams/${global.load.team.name}`, {
    method: 'DELETE',
    baseURL: 'http://localhost:3333'
  })

  router.push('/dashboard/teams')
}
</script>