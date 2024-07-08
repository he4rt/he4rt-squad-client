<template>
  <div v-motion-dashboard class="h[max 100vh] p[2rem] lg(p[4rem]) w:100% bg:h-dark-three scroll:y">
    <p
        class="text[center spline-sans h-light 4xl 700] w:90% tracking-tight typo[line-3rem] md(w:50% typo[line-4rem])"
      >
        Projetos da Comunidade
      </p>
      <p class="m[3rem 0 3rem 0] text[spline-sans h-gray lg center] w:90% md(w:50%)">
        Consulte projetos de outros membros para pairar novas ideias, além de estar apoiando o próximo.
      </p>
    <div v-for="item in data" :key="item">
      <div
    :class="[
      item.status === 'done' ? 'border[l px rgb-34-197-94] ' : '',
      item.status === 'unavailable' ? 'border[l px rgb-34-197-94] ' : '',
      item.status === 'doing' ? 'border[l px rgb-34-197-94] ' : '',
    ]"
    class="w:full bg:h-dark-two rounded:0.25rem m[2rem 0] flex[v-center h-between]"
  >
    <div class="p:1.25rem h:180px flex[col h-between]">
      <div class="flex[v-center gap-1.25rem]">
        <div class="flex[v-center h-center] bg:h-dark-four rounded:0.5rem w:1.25rem h:1.25rem p:0.125rem">
          <IconCheck v-if="item.status === 'done'" class="w:1.125rem h:1.125rem text:rgb-16-185-129" />
          <IconExclamation v-else-if="item.status === 'doing'" class="w:1.125rem h:1.125rem text:#FAD62D" />
          <IconClose v-else-if="item.status === 'unavailable'" class="w:1.125rem h:1.125rem text:red" />
        </div>
        <div class="flex[v-center h-center] bg:h-dark-four rounded:0.5rem w:1.25rem h:1.25rem p:0.125rem">
          <IconFireTwo class="w:1rem h:1rem text:h-gray" />
        </div>
        <h1 class="text[h-light lg]">{{ item.name }}</h1>
      </div>
      <div class="flex[v-center h-between] p[1.25rem 0]">
        <p class="text[h-gray inter 1rem 500] w:75%">{{ item.description }}</p>
      </div>
      <div class="flex:v-center">
        <div class="flex[v-center h-center] text:h-light p[r 3.5rem]">
          <img class="rounded:9999px w:1.75rem h:1.75rem border[2 h-gray solid] m[r 0.5rem]" :src="item.image" />
          <p class="w:12.5rem typo:truncate text:h-light">{{ item.username }}</p>
        </div>
        <div class="flex[v-center] w:12.5rem">
          <p v-if="item.status === 'done'" class="flex[v-center gap-1rem] text[rgb-16-185-129 inter]">
            <IconCheck class="w:1.5rem h:1.5rem" /> Finalizado
          </p>
          <p v-else-if="item.status === 'doing'" class="flex[v-center gap-1rem] text[#FAD62D inter]">
            <IconClock class="w:1.5rem h:1.5rem" /> Em andamento
          </p>
          <p v-else-if="item.status === 'unavailable'" class="flex[v-center gap-1rem] text[red inter]">
            <IconClose class="w:1.5rem h:1.5rem" />Indisponível
          </p>
        </div>
        <button v-if="!spinner" @click="onStarProject(item)" class="flex[v-center gap-0.5rem] bg:h-dark-one style:cursor-pointer m[l 5rem] rounded:0.5rem p[0.5rem 0.75rem]">
          <IconStar class="w:1.5rem h.1.5rem text:yellow" />
          <p class="text[#FAD62D 1.2rem]">{{ item.stars.length }}</p>
        </button>
        <button v-else @click="onStarProject(item)" class="flex[v-center gap-0.5rem] bg:h-dark-one style:cursor-pointer m[l 5rem] rounded:0.5rem p[0.5rem 0.75rem]">
          <IconSpinner class="w:1.5rem h:1.5rem text:white" />
        </button>
        <button @click="onOpenProject(item)" class="bg:h-second-purple text:white style:cursor-pointer m[l 5rem] rounded:0.5rem p[0.5rem 0.75rem]">
          <IconOpen class="w:1rem h:1rem" />
        </button>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  ;+definePageMeta({ layout: 'dashboard' })

  const global = useGlobalStore()
  const auth = useAuthStore()

  const spinner = ref(false)

  const { data, refresh } = await useAsyncData(
  'projects',
    () => $fetch('items', {
      baseURL: 'http://localhost:3333',
      method: 'GET'
    })
  )

  const onStarProject = async (item) => {
    spinner.value = true 

    await useFetch('/projects/star', {
      body: {
        id: `${item.teamName}:${item.name}`,
        userId: auth.session.uid,
      },
      baseURL: 'http://localhost:3333',
      method: 'POST'
    })

    spinner.value = false 

    await refresh()
  }

  const onOpenProject = async (item) => {
    await navigateTo(item.repoUrl, {
      external: true
    })
  }
</script>
