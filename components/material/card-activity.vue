<template>
  <div
    :class="[
      color === 'done' ? 'border-l-solid border-green-500 ' : '',
      color === 'unavailable' ? 'border-l-solid border-red-600 ' : '',
      color === 'doing' ? 'border-l-solid border-yellow-400 ' : '',
    ]"
    class="w-full h-42 bg-h-dark-two rounded box-border overflow-y-auto text-justify flex items-center"
  >
    <div class="grow p-5">
      <div class="flex items-center gap-3">
        <div class="flex items-center bg-h-divider rounded w-5 h-5 justify-center">
          <IconCheck v-if="color === 'done'" class="w-3 h-3 text-green-500" />
          <IconClose v-else-if="color === 'doing'" class="w-3 h-3 text-yellow-400" />
          <IconExclamation v-else-if="color === 'unavailable'" class="w-3 h-3 text-red-600" />
        </div>
        <div class="flex items-center bg-h-divider rounded w-5 h-5 justify-center">
          <IconFireTwo class="w-3 h-3 text-h-gray" />
        </div>

        <h1 class="text-h-light">{{ title }}</h1>
      </div>
      <div class="flex items-center justify-between py-4">
        <p class="text-h-gray">{{ description }}</p>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between text-h-light">
          <img class="rounded-full w-7 h-7 border-2 border-h-gray" src="https://i.imgur.com/vlU6ZAZ.jpg" />
          <p>{{ username }}</p>
        </div>
        <div class="flex items-center justify-between text-h-gray">
          <IconClock />
          <p>{{ time }} hrs</p>
        </div>
        <div class="flex items-center">
          <p v-if="color === 'done'" class="text-green-500"><IconCheck class="w-4 h-4" /> Finalizado</p>
          <p v-else-if="color === 'doing'" class="text-yellow-400"><IconClose class="w-4 h-4" /> Em andamento</p>
          <p v-else-if="color === 'unavailable'" class="text-red-600"><IconExclamation class="w-4 h-4" />Indisponível</p>
        </div>
        <div class="flex items-center gap-2">
          <IconStar v-if="typeof starAmount === 'number'" class="w-5 h-5 text-yellow-400" />
          <div v-else="!starAmount" class="text-h-gray"><IconStar class="w-5 h-5 text-h-gray" /> Avaliar</div>
          <p class="text-yellow-400">{{ starAmount }}</p>
        </div>

        <p></p>
      </div>
    </div>

    <div class="p-5">
      <button class="font-semibold bg-h-purple py-4 px-6 rounded border-none text-h-light">Abrir Task</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    description: string
    color?: 'done' | 'doing' | 'unavailable'
    time: number
    username: string
    starAmount?: number | ''
  }>()
</script>
