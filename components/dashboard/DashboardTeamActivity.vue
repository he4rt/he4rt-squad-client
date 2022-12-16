<template>
  <div class="flex flex-col w-full bg-h-dark-one rounded px-5 pt-10 pb-12 mb-12 overflow-y-auto h-200">
    <h2 class="font-inter pb-3 border-b border-h-divider font-bold text-h-light text-lg">Registro de Atividades</h2>
    <div class="flex flex-col w-full mt-10 gap-10">
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
    <div class="flex justify-center font-dm font-bold text-h-second-purple mt-12 cursor-pointer tracking-wide">ver mais</div>
  </div>
</template>

<script setup lang="ts">
  const list = useState('list', () => [
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
