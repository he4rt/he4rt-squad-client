<template>
  <header class="flex[row v-center h-between] w:100%">
    <p class="text[700 lg h-light]"><slot /></p>
    <div class="flex[gap-1.25rem v-center]">
      <ProviderIconButton @click.prevent.stop="global.dashboard.notifications = true">
        <IconAlert class="w:1.75rem h:1.75rem text:h-divider style:cursor-pointer" />
      </ProviderIconButton>
      <div class="h:2rem w:0.5rem bg:h-divider" />
      <p class="m[l 1.25rem] text:h-light">{{ auth.session?.email || '' }}</p>
      <img class="w:3rem h:3rem rounded:9999px" :src="data.imageUrl || 'https://i.imgur.com/vlU6ZAZ.jpg'" />
    </div>
  </header>
</template>

<script setup lang="ts">
  const global = useGlobalStore()
  const auth = useAuthStore()

  const { data } = await useAsyncData(
    'session',
    () => $fetch(`http://localhost:3333/users/${auth.session.uid}`, {
      method: 'GET'
    })
  )
</script>
