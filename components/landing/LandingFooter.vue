<template>
  <footer
    class="flex[wrap col v-center h-center] h:19rem bg:h-dark-one w:full"
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
  >
  <div class="flex[wrap h-around gap-8px] md(flex[wrap h-around gap-60px]) text:h-gray m[b 2.5rem]">
    <a class="text:h-gray typo[decoration-none] style[cursor-pointer]" href="#home">Início</a>
    <a class="text:h-gray typo[decoration-none] style[cursor-pointer]" href="#ranking">Ranking</a>
    <a class="text:h-gray typo[decoration-none] style[cursor-pointer]" href="#about">Sobre</a>
    <a class="text:h-gray typo[decoration-none] style[cursor-pointer]" href="#discord">Discord</a>
  </div>
  <div class="flex[gap-20px text:h-gray] m[b 2.5rem]">
    <a target="_blank" href="https://www.instagram.com/heartdevs/">
        <IconInstagram class="text:h-gray w:2rem h:2rem style[cursor-pointer]" />
      </a>
      <a target="_blank" href="https://twitter.com/he4rtdevs/">
        <IconTwitter class="text:h-gray w:2rem h:2rem style[cursor-pointer]" />
      </a>
      <a target="_blank" href="https://github.com/he4rt">
        <IconGithub class="text:h-gray w:2rem h:2rem style[cursor-pointer]" />
      </a>
    </div>
    <div class="w:83% h:0.125rem bg:h-divider m[b 1.25rem]" />
    <p class="text[h-light] typo:center w:300px">© 2022 He4rt Devs. Todos os direitos reservados.</p>
  </footer>
</template>
