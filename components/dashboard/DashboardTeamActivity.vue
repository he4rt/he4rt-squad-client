<template>
  <div
    class="flex:col h[max 1100px] scroll[y auto] w:full bg:h-dark-one rounded:0.5rem p[0 2.5rem 0 3rem] md(p[1.5rem 2.5rem 1.rem 3rem])"
  >
    <h2 class="text[inter h-light 700 xl] p[t 1.75rem]">Registro de Atividades</h2>
    <div class="flex[col gap-2.5rem] w:full m[t 2.5rem]">
      <DashboardTeamActivityItem
        :title="item.title"
        :description="item.description"
        :color="item.color"
        :time="item.time"
        :username="item.username"
        :username_image_url="item.username_image_url"
        :starAmount="item.starAmount"
        v-for="(item, index) in list"
        :key="index"
      />
    </div>
    <div
      class="flex[h-center v-center] text[dm-sans 700 h-second-purple 1rem] m[2rem 0] style:cursor-pointer hover(text:h-light)"
    >
      ver mais
    </div>
  </div>
</template>

<script setup lang="ts">
  const list = ref([
    {
      title: '[UI/UX] Criar Design System He4rt Devs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis in massa in malesuada. Aenean in quam vitae ex tincidunt imperdiet non vitae sapien.',
      color: 'done' as any,
      time: 3,
      username: 'NeexTuRHe4rt',
      username_image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      starAmount: 4,
    },
    {
      title: '[UI/UX] Criar Design System He4rt Devs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis in massa in malesuada. Aenean in quam vitae ex tincidunt imperdiet non vitae sapien.',
      color: 'doing' as any,
      time: 3,
      username: 'NeexTuRHe4rt',
      username_image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      starAmount: 4,
    },
    {
      title: '[UI/UX] Criar Design System He4rt Devs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis in massa in malesuada. Aenean in quam vitae ex tincidunt imperdiet non vitae sapien.',
      color: 'unavailable' as any,
      time: 3,
      username: 'NeexTuRHe4rt',
      username_image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      starAmount: 4,
    },
  ])
</script>
