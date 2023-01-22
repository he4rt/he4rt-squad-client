<template>
  <div class="flex[col gap-3px v-center h-center] w:full p[2.5rem 0]">
    <img v-if="url" class="rounded:9999px w:5rem h:5rem border[2 solid h-divider]" :src="url" />
    <div v-else-if="name" class="flex[v-center h-center] rounded:9999px w:5rem h:5rem border[2px solid h-divider]" :src="url">
      <IconUser class="h:2rem w:2rem text:h-user" />
    </div>
    <div v-else class="flex[v-center h-center] rounded:9999px w:5rem h:5rem border[2px solid h-divider]" :src="url">
      <IconAdd class="h:2rem w:2rem text:h-user" />
    </div>
    <ProviderIconButton>
      <IconDots class="pos[relative left-4rem bottom-3.75rem] h:1.5rem w:1.5rem" />
    </ProviderIconButton>
    <p v-if="name" class="text[h-light 1rem 700]">{{ name }}</p>
    <p v-else class="text[h-light 1rem 700]">Adicionar Membro</p>
    <p v-if="type" class="text:h-gray">{{ type }}</p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    url?: string
    name?: string
    type?: string
  }>()
</script>
