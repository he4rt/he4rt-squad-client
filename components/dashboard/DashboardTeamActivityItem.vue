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
          <IconCheck v-if="color === 'done'" class="w:1.125rem h:1.125rem text:rgb-16-185-129" />
          <IconExclamation v-else-if="color === 'doing'" class="w:1.125rem h:1.125rem text:#FAD62D" />
          <IconClose v-else-if="color === 'unavailable'" class="w:1.125rem h:1.125rem text:red" />
        </div>
        <div class="flex[v-center h-center] bg:h-dark-four rounded:0.5rem w:1.25rem h:1.25rem p:0.125rem">
          <IconFireTwo class="w:1rem h:1rem text:h-gray" />
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
        <div class="flex[gap-0.5rem v-center h-between] text:h-gray p[r 3.5rem]">
          <IconClock class="w:1.25rem h:1.25rem" />
          <p class="w:4rem">{{ time }} hrs</p>
        </div>
        <div class="flex[v-center] w:12.5rem">
          <p v-if="color === 'done'" class="flex[v-center gap-1rem] text[rgb-16-185-129 inter]">
            <IconCheck class="w:1.5rem h:1.5rem" /> Finalizado
          </p>
          <p v-else-if="color === 'doing'" class="flex[v-center gap-1rem] text[#FAD62D inter]">
            <IconClock class="w:1.5rem h:1.5rem" /> Em andamento
          </p>
          <p v-else-if="color === 'unavailable'" class="flex[v-center gap-1rem] text[red inter]">
            <IconClose class="w:1.5rem h:1.5rem" />Indisponível
          </p>
        </div>
        <div class="flex[v-center gap-0.5rem] m[l 5rem]">
          <IconStar v-if="typeof starAmount === 'number'" class="w:1.25rem h.125rem text:yellow" />
          <div v-else="!starAmount" class="text:h-gray"><IconStar class="w:1.25rem h.125rem text:h-gray" /> Avaliar</div>
          <p class="text:#FAD62D">{{ starAmount }},0</p>
        </div>
      </div>
    </div>
    <button class="text[h-light 1rem 600] bg:h-purple p[0.75rem 2.5rem] rounded:0.5rem border:0 m[r 2.5rem] style:cursor-pointer">
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
