<template>
  <div
    :class="[
      color === 'success' ? 'border-l-solid border-green-400' : '',
      color === 'he4rt' ? 'border-l-solid border-h-purple' : '',
    ]"
    class="w-80 h-42 max-h-60 bg-h-dark-two rounded p-4 box-border text-justify"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-h-light">{{ title }}</h2>
      <div>
        <IconCheck class="w-5 h-5 text-h-purple" />
      </div>
    </div>
    <p class="text-h-gray pt-4 mb-4">{{ description }}</p>
    <div>
      <a v-if="color" class="font-bold no-underline text-h-purple cursor-pointer">ver mais</a>
      <div v-else class="flex items-center justify-between">
        <button class="font-semibold border text-h-gray bg-transparent py-2 px-6 rounded border-h-gray">Recusar</button>
        <button class="font-semibold bg-h-purple py-2 px-6 rounded border-none text-h-light">Aceitar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    description: string
    color?: 'success' | 'he4rt'
  }>()
</script>
