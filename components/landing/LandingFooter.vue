<template>
  <footer
    v-motion="{
      initial: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 100,
          duration: 500,
        },
      },
    }"
    class="flex flex-wrap flex-col items-center justify-center h-75 bg-h-dark-one w-full"
  >
    <div class="flex flex-wrap justify-center md:justify-around md:gap-5 gap-20 text-h-gray mb-10">
      <a class="text-h-gray no-underline cursor-pointer" href="#home">Início</a>
      <a class="text-h-gray no-underline cursor-pointer" href="#ranking">Ranking</a>
      <a class="text-h-gray no-underline cursor-pointer" href="#about">Sobre</a>
      <a class="text-h-gray no-underline cursor-pointer" href="#discord">Discord</a>
      <NuxtLink class="text-h-gray no-underline cursor-pointer" to="/dashboard"> Dashboard </NuxtLink>
    </div>
    <div class="flex gap-20 text-h-gray mb-10">
      <IconInstagram class="text-h-gray w-8 h-8 cursor-pointer" />
      <IconTwitter class="text-h-gray w-8 h-8 cursor-pointer" />
      <IconGithub class="text-h-gray w-8 h-8 cursor-pointer" />
    </div>
    <div class="w-5/6 h-0.5 bg-h-divider mb-5" />
    <p class="text-h-light w-80 text-center">© 2022 He4rt Devs. Todos os direitos reservados.</p>
  </footer>
</template>
