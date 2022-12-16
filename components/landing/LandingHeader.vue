<template>
  <header class="flex justify-between items-center w-5/6 z-10">
    <section class="flex gap-15">
      <NuxtLink class="no-underline text-h-light text-base md:text-xl font-bold" exactActiveClass="text-h-purple border-b-3 border-h-purple pb-2" to="#home">
        Início
      </NuxtLink>
      <NuxtLink class="no-underline text-h-light md:text-xl font-bold" to="#ranking">
        Ranking
      </NuxtLink>
      <NuxtLink class="no-underline text-h-light md:text-xl font-bold" to="#about">
        Sobre
      </NuxtLink>
      <NuxtLink class="no-underline text-h-light md:text-xl font-bold" to="#discord">
        Nosso Discord
      </NuxtLink>
    </section>
    <section class="hidden md:flex">
      <button class="px-8 py-4 bg-transparent text-h-light hover:text-black rounded-lg border-3 border-white font-bold tracking-wider cursor-pointer hover:bg-white transition-colors">
        Acessar Dashboard
      </button>
    </section>
  </header>
</template>