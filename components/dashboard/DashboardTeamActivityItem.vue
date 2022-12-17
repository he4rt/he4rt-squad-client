<template>
  <div
    :class="[
      color === 'done' ? 'border-l-4 border-green-500' : '',
      color === 'unavailable' ? 'border-l-4 border-red-600 ' : '',
      color === 'doing' ? 'border-l-4 border-yellow-400 ' : '',
    ]"
    class="w-full bg-h-dark-two rounded box-border overflow-y-auto justify-between flex items-center"
  >
    <div class="p-5">
      <div class="flex items-center gap-5">
        <div class="flex items-center bg-h-dark-four rounded w-5 h-5 justify-center p-0.5 shadow-lg">
          <IconCheck v-if="color === 'done'" class="w-5 h-5 text-green-500" />
          <IconExclamation v-else-if="color === 'doing'" class="w-5 h-5 text-yellow-400" />
          <IconClose v-else-if="color === 'unavailable'" class="w-5 h-5 text-red-600" />
        </div>
        <div class="flex items-center bg-h-four rounded w-5 h-5 justify-center p-0.5 shadow-lg">
          <IconFireTwo class="w-4 h-4 text-h-gray" />
        </div>

        <h1 class="text-h-light text-lg">{{ title }}</h1>
      </div>
      <div class="flex items-center justify-between py-5">
        <p class="text-h-gray w-3/4 leading-7 font-inter font-medium">{{ description }}</p>
      </div>
      <div class="flex items-center">
        <div class="flex items-center justify-between text-h-light pr-15">
          <img class="rounded-full w-7 h-7 border-2 border-h-gray mr-2" :src="username_image_url" />
          <p class="w-50 truncate">{{ username }}</p>
        </div>
        <div class="flex gap-2 items-center justify-between text-h-gray mr-15">
          <IconClock class="w-5 h-5" />
          <p class="w-16">{{ time }} hrs</p>
        </div>
        <div class="flex items-center w-50">
          <p v-if="color === 'done'" class="flex items-center gap-4 text-green-500 font-inter">
            <IconCheck class="w-6 h-6" /> Finalizado
          </p>
          <p v-else-if="color === 'doing'" class="flex items-center gap-4 text-yellow-400 font-inter">
            <IconClock class="w-6 h-6" /> Em andamento
          </p>
          <p v-else-if="color === 'unavailable'" class="flex items-center gap-4 text-red-600 font-inter">
            <IconClose class="w-6 h-6" />Indisponível
          </p>
        </div>
        <div class="flex items-center gap-2 ml-30">
          <IconStar v-if="typeof starAmount === 'number'" class="w-5 h-5 text-yellow-400" />
          <div v-else="!starAmount" class="text-h-gray"><IconStar class="w-5 h-5 text-h-gray" /> Avaliar</div>
          <p class="text-yellow-400">{{ starAmount }},0</p>
        </div>
      </div>
    </div>
    <button
      class="font-semibold bg-h-purple py-4 px-6 rounded border-none text-h-light mr-10 cursor-pointer transition-colors hover:bg-h-light hover:text-h-second-purple"
    >
      Abrir Task
    </button>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    description: string
    color?: 'done' | 'doing' | 'unavailable'
    time: number
    username: string
    username_image_url: string
    starAmount?: number | ''
  }>()
</script>
