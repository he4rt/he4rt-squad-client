<template>
  <div
    :class="[
      color === 'done' ? 'border[l px rgb-34-197-94] ' : '',
      color === 'unavailable' ? 'border[l px rgb-34-197-94] ' : '',
      color === 'doing' ? 'border[l px rgb-34-197-94] ' : '',
    ]"
    class="w:full bg:h-dark-two rounded:0.25rem flex[v-center h-between]"
  >
    <div class="p:1.25rem h:180px flex[col h-between]">
      <div class="flex[v-center gap-1.25rem]">
        <div class="flex[v-center h-center] bg:h-dark-four rounded:0.5rem w:1.25rem h:1.25rem p:0.125rem">
          <IconCheck v-if="color === 'done' || isFinished" class="w:1.125rem h:1.125rem text:rgb-16-185-129" />
          <IconExclamation v-else-if="color === 'doing'" class="w:1.125rem h:1.125rem text:#FAD62D" />
          <IconClose v-else-if="color === 'unavailable'" class="w:1.125rem h:1.125rem text:red" />
        </div>
        <div class="flex[v-center h-center] bg:h-dark-four rounded:0.5rem w:1.25rem h:1.25rem p:0.125rem">
          <IconFireTwo class="w:1rem h:1rem text:h-gray" />
        </div>
        <div @click="onOpenRepo" class="flex[v-center h-center] style:cursor-pointer bg:h-dark-four rounded:0.5rem w:1.25rem h:1.25rem p:0.125rem">
          <IconGithub class="w:1rem h:1rem text:h-gray" />
        </div>

        <h1 class="text[h-light lg]">{{ title }}</h1>
      </div>
      <div class="flex[v-center h-between] p[1.25rem 0]">
        <p class="text[h-gray inter 1rem 500] w:75%">{{ description }}</p>
      </div>
      <div class="flex:v-center">
        <div class="flex[v-center h-center] text:h-light p[r 3.5rem]">
          <img class="rounded:9999px w:1.75rem h:1.75rem border[2 h-gray solid] m[r 0.5rem]" :src="username_image_url" />
          <p class="w:12.5rem typo:truncate text:h-light">{{ username }}</p>
        </div>
        <div class="flex[v-center] w:12.5rem">
          <p v-if="color === 'done' || isFinished" class="flex[v-center gap-1rem] text[rgb-16-185-129 inter]">
            <IconCheck class="w:1.5rem h:1.5rem" /> Finalizado
          </p>
          <p v-else-if="color === 'doing' && !isFinished" class="flex[v-center gap-1rem] text[#FAD62D inter]">
            <IconClock class="w:1.5rem h:1.5rem" /> Em andamento
          </p>
          <p v-else-if="color === 'unavailable'" class="flex[v-center gap-1rem] text[red inter]">
            <IconClose class="w:1.5rem h:1.5rem" />Indisponível
          </p>
        </div>
        <div class="flex[v-center gap-0.5rem] m[l 5rem]">
          <IconStar v-if="typeof starAmount === 'number'" class="w:1.5rem h.1.5rem text:yellow" />
          <p class="text[#FAD62D 1.2rem]">{{ starAmount }}</p>
        </div>
      </div>
    </div>
    <button @click="onFinishProject" v-if="global.load.team.ownerId === auth.session.uid && color !== 'done' && !isFinished" class="text[h-light 1rem 600] bg:h-purple p[0.75rem 2.5rem] rounded:0.5rem border:0 m[r 2.5rem] style:cursor-pointer">
      Finalizar Project
    </button>
  </div>
</template>

<script setup lang="ts">
  const global = useGlobalStore()
  const auth = useAuthStore()
  const isFinished = ref(false)

  const props = defineProps<{
    id: string
    title: string
    description: string
    color?: 'done' | 'doing' | 'unavailable'
    time: number
    username: string
    username_image_url: string
    starAmount?: number | ''
    repoUrl: string
  }>()

  const onOpenRepo = () => {
    if(!props.repoUrl.startsWith('http')) return

    window.open(props.repoUrl)
  }

  const onFinishProject = async () => {
    await useFetch('/projects', {
      body: {
        id: props.id,
      },
      baseURL: 'http://localhost:3333',
      method: 'PUT'
    })

    isFinished.value = true
  }
</script>
