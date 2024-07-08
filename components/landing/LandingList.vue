<template>
  <div class="w:100%">
    <div
    class="flex[gap-10px h-between v-center wrap] m[b 2rem] p:1.25rem w:100% bg:h-dark-two rounded:0.5rem md(flex[gap-30px h-around v-center wrap])"
    v-for="(item, index) in data"
    :key="index"
  >
    <p class="text[h-purple lg 700] display:none md(display:inline)">#{{ index + 1 }}</p>
    <img
      :class="[index + 1 <= 3 ? 'border[4 h-purple]' : '']"
      class="rounded:9999px w:3.5rem h:3.5rem display:none md(display:inline w:4rem h:4rem)"
      :src="item.image"
    />
    <div class="flex[col gap-3 h-between] display:none md(display:inline)">
      <p class="text[1rem h-light 700]">{{ item.name }}</p>
      <p class="text:h-gray">{{ item.type }}</p>
    </div>
    <div class="flex[col gap-3 ai-center jc-center] display:none md(display:inline)">
      <p class="text[1rem h-light 700]">Tarefas Completadas</p>
      <p class="text:h-gray">{{ item.tasks }}</p>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
  const { data, error, refresh } = await useAsyncData(
    'teams',
    () => $fetch('http://localhost:3333/teams', {
      method: 'GET'
    })
  )
</script>
