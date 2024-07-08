<template>
  <div v-motion-dashboard class="h[max 100vh] w:full bg:h-dark-three scroll[y auto]">
    <div class="dashboard-sizer flex[gap-3rem col]">
      <DashboardHeader @click="toggle = !toggle" v-if="!toggle"> Olá, <span class="text[lg h-purple]">{{ name }}</span> </DashboardHeader>
      <div class="flex[row ai-center]" v-else>
        <input @keyup.enter="onChangeNickname" class="w:8rem" v-model="nickname" type="text" />
        <IconPencil @click="onChangeNickname" class="w:1.3rem m[0 0 0 0.5rem] h:1.3rem text:white" />
      </div>
      <p class="text[h-light dm-sans 700 3xl] m[t 2.5rem]">Seus times</p>
      <div class="flex[h-between v-start] w:full p[b 2.5rem] border[b h-divider 1px]">
        <p class="text[dm-sans 1rem h-gray] w:50%">
          Gerencie os times em que você participa ou crie novos!
        </p>
        <NuxtLink
          to="/dashboard/teams/control/register"
          class="flex[gap-0.5rem v-center h-between] typo[decoration-none] border[3px h-divider] text[h-gray 1rem 700] p:0.5rem rounded:0.5rem bg:transparent style:cursor-pointer"
        >
          <IconAdd class="w:1.5rem h:1.5rem" />
          Criar time
        </NuxtLink>
      </div>
      <div class="flex[wrap h-center v-center gap-1.5rem] w:full md(flex[wrap h-between v-center gap-1.5rem])">
        <TeamsItem @reset="onRemoveTeamItem" :team="item" v-for="item in data" :key="item.message" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'dashboard', middleware: ["auth"] })

const auth = useAuthStore()

const toggle = ref(false)

const nickname = ref('')
const name = ref(auth.session.displayName)

const { data, error, refresh } = await useAsyncData(
  'teams',
  () => $fetch(`http://localhost:3333/users/teams/${auth.session.uid}`, {
    method: 'GET'
  })
)

const onChangeNickname = async () => {
  if(nickname.value.length < 2 || nickname.value.length > 12 || !nickname.value) return

  const { data } = await useFetch('/users/nickname', {
    body: {
      id: auth.session.uid,
      nickname: nickname.value
    },
    baseURL: 'http://localhost:3333',
    method: 'PUT'
  })

  if(data.value) {
    name.value = nickname.value
    auth.session.displayName = nickname.value
  }

  toggle.value = !toggle.value
  nickname.value = ''
}

const onRemoveTeamItem = (team) => {
  data.value = data.value.filter(el => el.name !== team);
}
</script>
