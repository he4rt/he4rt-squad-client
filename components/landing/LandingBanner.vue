<template>
  <div id="discord" class="flex[wrap v-center] w:full h:15rem m[l 2.5rem]">
    <img class="pos[absolute left-0] w:100% h:15rem bg:cover" src="~/assets/landing-3.png" />
    <div
      class="z:10"
      v-motion="{
        initial: {
          x: -50,
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            delay: 100,
            duration: 500,
          },
        },
      }"
    >
      <div class="text:3xl">
        <p class="text[3xl h-light]">Venha fazer parte da</p>
        <p class="text[700 3xl h-purple] m[t 0.5rem]">He4rt Devs</p>
        <p class="w:75% m[t 1.25rem] text:h-gray hidden-in-mobile">
          Entre em nosso servidor do discord e aproveite para fazer novas amizades, compartilhar código e aproveitar o que há de melhor em uma comunidade unida.
        </p>
      </div>
    </div>
    <div
      class="z:10"
      v-motion="{
        initial: {
          x: 50,
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            delay: 100,
            duration: 500,
          },
        },
      }"
    >
      <MaterialBtn @click="onDiscordInvite">Entrar no Discord</MaterialBtn>
    </div>
  </div>
</template>

<script setup>
const onDiscordInvite = async () => {
  await navigateTo('https://discord.gg/he4rt', {
    external: true
  })
}
</script>
