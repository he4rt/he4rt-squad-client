<template>
  <div
    class="flex gap-10 md:gap-0 p-5 flex-wrap justify-between md:justify-around items-center w-full bg-h-dark-two rounded-lg shadow"
    v-for="(item, index) in list"
    :key="index"
  >
    <p class="text-h-purple text-lg text-bold hidden md:flex">#{{ index + 1 }}</p>
    <img
      :class="[index + 1 <= 3 ? 'border-4 border-h-purple' : '']"
      class="rounded-full w-14 h-14 md:w-22 md:h-22 hidden md:flex"
      :src="item.image_url"
    />
    <div class="flex-col gap-3 justify-between hidden md:flex">
      <p class="font-bold text-h-light">{{ item.name }}</p>
      <p class="text-h-gray">{{ item.type }}</p>
    </div>
    <div class="flex items-center justify-between w-full md:hidden flex">
      <img
        :class="[index + 1 <= 3 ? 'border-4 border-h-purple' : '']"
        class="rounded-full w-14 h-14 md:w-22 md:h-22"
        :src="item.image_url"
      />
      <div class="flex flex-col gap-3 justify-between">
        <p class="font-bold text-h-light">{{ item.name }}</p>
        <p class="text-h-gray">{{ item.type }}</p>
      </div>
      <p class="text-h-purple text-lg text-bold">#{{ index + 1 }}</p>
    </div>
    <div class="flex flex-col gap-3 justify-between">
      <p class="font-bold text-h-light">Nvl</p>
      <p class="text-h-gray">{{ item.level }}</p>
    </div>
    <div class="flex flex-col gap-3 justify-between">
      <p class="font-bold text-h-light">Conquistas</p>
      <p class="text-h-gray">{{ item.conquests }}</p>
    </div>
    <div class="flex flex-col gap-3 justify-between">
      <p class="font-bold text-h-light">Mentor</p>
      <p class="text-h-gray">{{ item.leader }}</p>
    </div>
    <NuxtLink to="/dashboard/teams" class="font-bold no-underline text-center text-h-purple cursor-pointer">Ver equipe</NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const list = useState('list', () => [
    {
      name: 'Tropa do Poze',
      image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      type: 'Front - End',
      level: 157,
      conquests: 100,
      leader: 'NexTuRHe4rt',
    },
    {
      name: 'Tropa do Poze',
      image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      type: 'Front - End',
      level: 157,
      conquests: 100,
      leader: 'NexTuRHe4rt',
    },
    {
      name: 'Tropa do Poze',
      image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      type: 'Front - End',
      level: 157,
      conquests: 100,
      leader: 'NexTuRHe4rt',
    },
    {
      name: 'Tropa do Poze',
      image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      type: 'Front - End',
      level: 157,
      conquests: 100,
      leader: 'NexTuRHe4rt',
    },
    {
      name: 'Tropa do Poze',
      image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      type: 'Front - End',
      level: 157,
      conquests: 100,
      leader: 'NexTuRHe4rt',
    },
    {
      name: 'Tropa do Poze',
      image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      type: 'Front - End',
      level: 157,
      conquests: 100,
      leader: 'NexTuRHe4rt',
    },
    {
      name: 'Tropa do Poze',
      image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      type: 'Front - End',
      level: 157,
      conquests: 100,
      leader: 'NexTuRHe4rt',
    },
    {
      name: 'Tropa do Poze',
      image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      type: 'Front - End',
      level: 157,
      conquests: 100,
      leader: 'NexTuRHe4rt',
    },
    {
      name: 'Tropa do Poze',
      image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      type: 'Front - End',
      level: 157,
      conquests: 100,
      leader: 'NexTuRHe4rt',
    },
    {
      name: 'Tropa do Poze',
      image_url: 'https://i.imgur.com/vlU6ZAZ.jpg',
      type: 'Front - End',
      level: 157,
      conquests: 100,
      leader: 'NexTuRHe4rt',
    },
  ])
</script>
