<template>
  <header
    class="flex[row h-between v-center] w:83% z:10"
    v-motion="{
      initial: {
        y: 100,
        opacity: 0,
      },
      enter: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 750,
        },
      },
    }"
  >
    <section class="flex[row gap-60px]">
      <NuxtLink
        class="typo:decoration-none text[h-purple base 700] md(text[h-purple xl 700])"
        to="#home"
      >
        Início
      </NuxtLink>
      <NuxtLink class="typo:decoration-none text[h-light base 700] md(text[h-light xl 700])" to="#ranking"> Ranking </NuxtLink>
      <NuxtLink class="typo:decoration-none text[h-light base 700] md(text[h-light xl 700])" to="#about"> Sobre </NuxtLink>
      <NuxtLink class="typo:decoration-none text[h-light base 700] md(text[h-light xl 700])" to="#discord"> Nosso Discord </NuxtLink>
    </section>
    <section v-if="auth.session" class="hidden-in-mobile">
      <NuxtLink
        to="/dashboard/teams"
        class="p[1rem 2rem] bg:transparent typo[no-underline decoration-none] text[h-light 1rem 700] rounded:0.5rem border[2 white solid] hover(bg:white text:black)"
      >
        Acessar Dashboard
      </NuxtLink>
    </section>
    <MaterialBtn @click.prevent.stop="router.push('/login')" v-else>Entrar</MaterialBtn>
  </header>
</template>

<script setup lang="ts">
const auth = useAuthStore()
const router = useRouter()
</script>
