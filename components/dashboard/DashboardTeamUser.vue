<template>
  <div class="flex flex-col gap-3 justify-center items-center w-full py-10">
    <img v-if="url" class="rounded-full w-20 h-20 border-2 border-h-divider" :src="url" />
    <div
      v-else-if="name"
      class="flex items-center justify-center rounded-full w-20 h-20 bg-h-divider border-2 border-h-divider"
      :src="url"
    >
      <IconUser class="h-8 w-8 text-h-user" />
    </div>
    <div v-else class="flex items-center justify-center rounded-full w-20 h-20 bg-h-divider border-2 border-h-divider" :src="url">
      <IconAdd class="h-8 w-8 text-h-user" />
    </div>
    <IconAction class="relative left-16 bottom-15">
      <IconDots class="h-6 w-6 text-h-user" />
    </IconAction>
    <p v-if="name" class="text-h-light font-bold">{{ name }}</p>
    <p v-else class="text-h-light font-bold">Adicionar Membro</p>
    <p v-if="type" class="text-h-gray">{{ type }}</p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    url?: string
    name?: string
    type?: string
  }>()
</script>
