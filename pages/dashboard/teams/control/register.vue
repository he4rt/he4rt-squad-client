<template>
  <div v-motion-teams class="flex[col v-center] w:full scroll[y auto]">
    <img class="rounded:9999px w:7.5rem h:7.5rem m[2.5rem 0]" :src="image" />
    <p class="text:h-gray m[t 1.25rem]">Mínimo 80 x 80px - PNG ou JPG.</p>
    <div class="flex[col gap-1.25rem] w:full lg(w:50%) scroll[y auto]">
      <div class="flex[wrap row gap-1.25rem h-between v-center] m[t 2.5rem] w:full">
        <div class="w:full md(w:reset-none)">
          <p class="text[h-light dm-sans lg 500] m[b 0.75rem]">Nome da Equipe</p>
          <input v-model="name" type="text" class="w:full border[h-gray 2 solid] bg:transparent p:0.5rem rounded:0.5rem text:h-light" />
        </div>
        <div class="w:full md(w:reset-none)">
          <p class="text[h-light lg 500] m[b 0.75rem]">URL de imagem</p>
          <input v-model="image" type="text" class="w:full border[h-gray 2 solid] bg:transparent p:0.5rem rounded:0.5rem text:h-light" />
        </div>
      </div>
      <div class="flex[col v-start h-between] w:full">
        <p class="text[h-light dm-sans 500 lg] m[t 2.5rem]">Descrição do time</p>
        <input  v-model="description" type="text" class="w:full border[h-gray 2 solid] h:5rem bg:transparent p:0.5rem rounded:0.5rem text:h-light" />
      </div>
      <div class="flex[v-center h-center gap-2rem] w:full m[t 2.5rem] text:inter">
        <button
          @click="router.push('/dashboard')"
          class="bg:transparent p[1rem 4rem] border[h-gray 1 solid] rounded:0.5rem text[1rem h-gray 700] style:cursor-pointer"
        >
          Descartar
        </button>
        <button
          @click="onRegisterTeam"
          class="bg:h-second-purple p[1rem 4rem] border:0 rounded:0.5rem text[1rem h-light 700] style:cursor-pointer"
        >
          Salvar alterações
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  ;+definePageMeta({ layout: 'team' })

  const router = useRouter()
  const auth = useAuthStore()

  const image = ref('https://i.imgur.com/vlU6ZAZ.jpg')
  const name = ref('')
  const description = ref('')

  const onRegisterTeam = async () => {
    if(!name.value || !description.value || !image.value) return

    if(!auth.session) {
      router.push('/')

      return
    }

    console.log(auth.session)

    const { data, error } = await useFetch('/teams', {
      body: {
        name: name.value,
        description: description.value,
        image: image.value,
        // @ts-ignore
        id: auth.session.uid
      },
      baseURL: 'http://localhost:3333',
      method: 'POST'
    })

    console.log(data)

    router.push('/dashboard/teams')
  }
</script>
