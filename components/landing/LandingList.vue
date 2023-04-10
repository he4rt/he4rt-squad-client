<template>
  <div>
    <div
    class="flex[gap-10px h-between v-center wrap] m[b 2rem] p:1.25rem w:full bg:h-dark-two rounded:0.5rem md(flex[gap-30px h-around v-center wrap])"
    v-for="(item, index) in list"
    :key="index"
  >
    <p class="text[h-purple lg 700] display:none md(display:inline)">#{{ index + 1 }}</p>
    <img
      :class="[index + 1 <= 3 ? 'border[4 h-purple]' : '']"
      class="rounded:9999px w:3.5rem h:3.5rem display:none md(display:inline w:4rem h:4rem)"
      :src="item.image_url"
    />
    <div class="flex[col gap-3 h-between] display:none md(display:inline)">
      <p class="text[1rem h-light 700]">{{ item.name }}</p>
      <p class="text:h-gray">{{ item.type }}</p>
    </div>
    <div class="flex[col gap-3 h-between] display:none md(display:inline)">
      <div class="flex[col gap-3 h-between]">
        <p class="text[1rem h-light 700]">{{ item.name }}</p>
        <p class="text:h-gray">{{ item.type }}</p>
      </div>
    </div>
    <div class="flex[col gap-3 h-between]">
      <p class="text[1rem h-light 700]">Nvl</p>
      <p class="text:h-gray">{{ item.level }}</p>
    </div>
    <div class="flex[col gap-3 h-between]">
      <p class="text[1rem h-light 700]">Conquistas</p>
      <p class="text:h-gray">{{ item.conquests }}</p>
    </div>
    <div class="flex[col gap-3 h-between]">
      <p class="text[1rem h-light 700]">Mentor</p>
      <p class="text:h-gray">{{ item.leader }}</p>
    </div>
    <NuxtLink to="/dashboard/teams" class="text[h-purple 1rem 700 center] typo[decoration-none] style:cursor-pointer">Ver equipe</NuxtLink>
  </div>
  </div>
</template>

<script setup lang="ts">
  const list = ref([
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
