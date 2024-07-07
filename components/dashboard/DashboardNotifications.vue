<template>
  <aside
    class="pos[fixed top-0 right-0] p[1.25rem 0.5rem] flex[col v-center gap-2rem] bg:h-dashboard-aside filter[backdrop blur-16px] h:100vh scroll:y w:full z:999999 md(w:400px)"
  >
    <div @click.prevent.stop="global.dashboard.notifications = false" class="flex[v-center h-end] w:full style:cursor-pointer">
      <IconClose class="pos:relative h:2rem w:2rem text:h-light" />
    </div>
    <DashboardNotificationCard v-for="item in set.invites" @reset="onRemoveItem" :key="item" :title="item" description="Esta equipe quer você no time." />
  </aside>
</template>

<script setup lang="ts">
  const global = useGlobalStore()
  const auth = useAuthStore()
  const set = ref([])

  onMounted(async () => {
    const { data, error } = await useFetch(`http://localhost:3333/users/${auth.session.uid}`, {
      baseURL: 'http://localhost:3333',
      method: 'GET'
    })

    set.value = data.value
  })

  const onRemoveItem = (team: string) => {
    set.value.invites = set.value.invites.filter(target => target !== team)
  }
</script>
