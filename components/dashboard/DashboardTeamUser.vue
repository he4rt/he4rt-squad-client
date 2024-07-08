<template>
  <div class="flex[col gap-3px v-center h-center] w:full p[2.5rem 0]">
    <img v-if="url" class="rounded:9999px w:5rem h:5rem border[2 solid h-divider]" :src="url" />
    <div v-else-if="name" class="flex[v-center h-center] rounded:9999px w:5rem h:5rem border[2px solid h-divider]" :src="url">
      <IconUser class="h:2rem w:2rem text:h-user" />
    </div>
    <div v-else class="flex[v-center h-center] cursor:pointer rounded:9999px w:5rem h:5rem border[2px solid h-divider]" :src="url">
      <input v-model="target" placeholder="Nome do Membro" class="border[h-gray 2 solid] bg:transparent p:0.5rem rounded:0.5rem text:h-light" type="text" />
    </div>
    <p v-if="name" class="text[h-light 1rem 700]">{{ name }}</p>
    <button @click="onInviteMember" v-else-if="!spinner" class="text[h-light 1rem 700] bg:transparent cursor:pointer">Adicionar Membro</button>
    <button v-else class="text[h-light 1rem 700] bg:transparent cursor:pointer"><IconSpinner class="w:2rem h:2rem" /></button>
    <p v-if="type" class="text:h-gray">{{ type }}</p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    url?: string
    name?: string
    type?: string
    teamName?: string
  }>()

  const target = ref('')
  const spinner = ref(false)

  const onInviteMember = async () => {
    spinner.value = true 
    const { data, error } = await useFetch('/teams/invite', {
      body: {
        userName: target.value,
        teamName: props.teamName
      },
      baseURL: 'http://localhost:3333',
      method: 'POST'
    })

    spinner.value = false 
    target.value = ''
  }
</script>
