<template>
  <div class="flex[col v-center gap-1.25rem] w:17.125rem bg:h-dark-one text:dm-sans p:1.25rem rounded:0.5rem">
    <ProviderIconButton v-if="props.team.ownerId === auth.session.uid" @click="onDeleteTeam">
      <IconDelete class="pos[relative left-7rem] tr[rotate-90deg] h:1.5rem w:1.5rem" />
    </ProviderIconButton>
    <img class="rounded:9999px w:6rem h:6rem border[2 h-divider solid]" :src="props.team.image" />
    <p class="text[h-light lg 700]">{{ props.team.name }}</p>
    <p class="text[center h-gray] p[1.25rem 0.5rem]">
      {{ props.team.description }}
    </p>
    <div class="flex[v-center h-between] w:100% m[b 1.25rem]">
      <div class="flex[col gap-1.25rem]">
        <p class="text[h-light 1rem 700]">Projeto Atual:</p>
        <p class="text:h-gray">{{ props.team.activateProject }}</p>
      </div>
      <div class="flex[col gap-1.25rem]">
        <p class="text[h-light 1rem 700]">Nvl</p>
        <p class="text:h-gray">{{ props.team.level }}</p>
      </div>
    </div>
    <MaterialBtn
      v-if="!spinner"
      class="typo[decoration-none] flex:h-center text[1rem h-light dm-sans 500] w:full p[0.875rem 0] border:0 bg:h-second-purple rounded:0.5rem m[b 0.25rem] style:cursor-pointer"
      @click="onLoadTeam"
    >
      Ver equipe
    </MaterialBtn>
    <MaterialBtn
      v-else
      class="typo[decoration-none] flex:h-center text[1rem h-light dm-sans 500] w:full p[0.875rem 0] border:0 bg:h-second-purple rounded:0.5rem m[b 0.25rem] style:cursor-pointer"
      @click="onLoadTeam"
    >
      <IconSpinner class="h:1.5rem w:1.5rem" />
    </MaterialBtn>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const global = useGlobalStore()
const auth = useAuthStore()
const props = defineProps<{
  team: {
    name: string,
    image: string,
    activateProject: string
    ownerId: string,
    description: string,
    level: number
    usersId: string[]
  }
}>()
const emit = defineEmits(['reset'])
const spinner = ref(false)

const onLoadTeam = async () => {
  spinner.value = true

  global.load.team = props.team

  router.push('/dashboard/teams/id')
}

const onDeleteTeam = async () => {
  if(!confirm('Voce realmente deseja deletar o time?')) return

  const { data } = await useFetch(`/teams/${props.team.name}`, {
    baseURL: 'http://localhost:3333',
    method: 'DELETE'
  })

  if(data) emit('reset', props.team.name)
}
</script>