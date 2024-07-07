<template>
  <div
    :class="[
      color === 'success' ? 'border[l solid green]' : '',
      color === 'he4rt' ? 'border[l solid h-purple]' : '',
    ]"
    class="flex[col v-stretch h-between] w:20rem h:10rem bg:h-dark-two rounded:0.25rem p:1rem text:justify"
  >
    <div class="flex[v-center h-between]">
      <h2 class="text:h-light">{{ title }}</h2>
      <div>
        <IconCheck class="w:1.5rem h:1.5rem text:h-purple" />
      </div>
    </div>
    <p class="text:h-gray p[t 1rem] m[b 1rem]">{{ description }}</p>
    <div>
      <a v-if="color" class="text[700 1rem h-purple] style:cursor-pointer typo:decoration-none">ver mais</a>
      <div v-else class="flex[v-center h-between]">
        <button @click="onDeclineInvite" class="text[500 1rem h-gray] border[h-gray solid 1px] bg:transparent p[0.5rem 1.5rem] rounded:0.25rem">Recusar</button>
        <button @click="onAcceptInvite" class="text[500 1rem h-light] bg:h-purple p[0.5rem 1.5rem] rounded:0.25rem border:0">Aceitar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string
    description: string
    color?: 'success' | 'he4rt'
  }>()
  const auth = useAuthStore()

  const emit = defineEmits(['reset'])

  const onDeclineInvite = async () => {
    const { data, error } = await useFetch('/teams/invite/decline', {
      body: {
        id: auth.session.uid,
        inviteName: props.title
      },
      baseURL: 'http://localhost:3333',
      method: 'POST'
    })

    emit('reset', props.title)
  }

  const onAcceptInvite = async () => {
    const { data, error } = await useFetch('/teams/invite/accept', {
      body: {
        id: auth.session.uid,
        inviteName: props.title
      },
      baseURL: 'http://localhost:3333',
      method: 'POST'
    })

    emit('reset', props.title)
  }
</script>
