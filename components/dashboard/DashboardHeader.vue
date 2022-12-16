<template>
  <header class="flex justify-between items-center w-full">
    <p class="font-bold text-lg text-h-light"><slot /></p>
    <div class="flex gap-5 items-center">
      <IconAlert class="w-7 h-7 text-h-divider" />
      <div class="h-8 w-0.5 bg-h-divider" />
      <p class="ml-5 text-h-light">NeexTuRHe4rt</p>
      <img class="w-12 h-12 rounded-full" src="https://i.imgur.com/vlU6ZAZ.jpg" />
    </div>
  </header>
</template>
