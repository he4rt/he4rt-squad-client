<template>
  <div class="flex[col gap-2rem] scroll[y auto] h:100vh w:full bg:h-dark-two p[5rem 0]">
    <div class="p[0 2.5rem]">
      <h1 class="text[h-light 3xl 700] p[b 2rem]">
        Gerenciar: <span class="text[3xl 700 h-second-purple]">Tropa do Poze</span>
      </h1>
      <div class="flex[gap-5px v-center] mt-10 m[t 2.5rem]">
        <NuxtLink
          class="typo[decoration-none] text[h-gray dm-sans lg 500]"
          exactActiveClass="text[! h-light]"
          to="/dashboard/teams/control/register"
        >
          Informações</NuxtLink
        >
      </div>
      <p class="text:h-gray m[2rem 0]">
        Earth is the third planet from the Sun and the only astronomical object known to harbor life.
      </p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
</script>
