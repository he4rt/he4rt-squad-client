<template>
  <div v-motion-teams class="flex[col v-center] w:full">
    <img class="rounded:9999px w:7.5rem h:7.5rem m[2.5rem 0]" :src="image" />
    <button
      @click.prevent.stop="onUpload"
      class="text[h-gray 1rem 700] border[h-gray 1 solid] bg:transparent style:cursor-pointer p:0.375rem rounded:0.5rem"
    >
      Enviar imagem
    </button>
    <p class="text:h-gray m[t 1.25rem]">Mínimo 80 x 80px - PNG ou JPG.</p>
    <div class="flex[col gap-1.25rem] w:full lg(w:50%)">
      <div class="flex[wrap row gap-1.25rem h-between v-center] m[t 2.5rem] w:full">
        <div class="w:full md(w:reset-none)">
          <p class="text[h-light dm-sans lg 500] m[b 0.75rem]">Nome da Equipe</p>
          <input type="text" class="w:full border[h-gray 2 solid] bg:transparent p:0.5rem rounded:0.5rem text:h-light" />
        </div>
        <div class="w:full md(w:reset-none)">
          <p class="text[h-light lg 500] m[b 0.75rem]">Projeto Atual</p>
          <input type="text" class="w:full border[h-gray 2 solid] bg:transparent p:0.5rem rounded:0.5rem text:h-light" />
        </div>
      </div>
      <div class="flex[col v-start h-between] w:full">
        <p class="text[h-light dm-sans 500 lg] m[t 2.5rem]">Descrição do time</p>
        <input type="text" class="w:full border[h-gray 2 solid] h:5rem bg:transparent p:0.5rem rounded:0.5rem text:h-light" />
      </div>
      <div class="flex[v-center h-center gap-2rem] w:full m[t 2.5rem] text:inter">
        <button
          @click="router.push('/dashboard')"
          class="bg:transparent p[1rem 4rem] border[h-gray 1 solid] rounded:0.5rem text[1rem h-gray 700] style:cursor-pointer"
        >
          Descartar
        </button>
        <button
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
  const image = ref('https://i.imgur.com/vlU6ZAZ.jpg')
  const file = useFile()

  const onUpload = async () => {
    const res = useFileSystemAccess({
      dataType: 'Blob',
      types: [
        {
          accept: {
            'text/image': ['.png', '.jpg', '.jpeg'],
          },
        },
      ],
      excludeAcceptAllOption: true,
    })

    await res.open()

    file
      .readBlobToBase64(res.data.value as Blob)
      .then((result) => {
        image.value = result
      })
      .catch(() => {})
  }
</script>
