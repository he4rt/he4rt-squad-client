<template>
  <div v-motion-teams class="flex flex-col items-center w-full">
    <img class="rounded-full w-30 h-30 border-2 border-h-divider my-10" :src="image" />
    <button
      @click.prevent.stop="onUpload"
      class="text-h-gray font-bold border-2 border-h-divider bg-transparent cursor-pointer p-1.5 rounded-lg"
    >
      Enviar imagem
    </button>
    <p class="text-h-gray mt-5">Mínimo 80 x 80px - PNG ou JPG.</p>
    <div class="flex flex-col gap-5 w-full lg:w-1/2">
      <div class="flex gap-5 flex-wrap items-center w-full justify-between mt-10">
        <div class="w-full md:w-auto">
          <p class="text-h-light mb-3 font-dm-sans text-lg font-medium">Nome da Equipe</p>
          <input type="text" class="w-full bg-transparent p-2 border-2 border-h-divider rounded-lg text-h-light" />
        </div>
        <div class="w-full md:w-auto">
          <p class="text-h-light mb-3 font-dm-sans text-lg font-medium">Projeto Atual</p>
          <input type="text" class="w-full bg-transparent p-2 border-2 border-h-divider rounded-lg text-h-light" />
        </div>
      </div>
      <div class="flex flex-col items-start w-full justify-between">
        <p class="text-h-light mt-10 mb-3 font-dm-sans text-lg font-medium">Descrição do time</p>
        <input type="text" class="w-full h-20 bg-transparent p-2 border-2 border-h-divider rounded-lg text-h-light" />
      </div>
      <div class="flex items-center w-full justify-center gap-8 mt-10 font-inter">
        <button
          @click="router.push('/dashboard')"
          class="bg-transparent py-4 px-16 border-3 border-h-divider rounded-lg text-h-gray font-bold cursor-pointer"
        >
          Descartar
        </button>
        <button
          class="bg-h-second-purple py-4 px-10 border-3 border-h-second-purple rounded-lg text-h-light font-bold cursor-pointer"
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
