<template>
  <div id="discord" class="flex flex-wrap items-center w-full h-60 ml-10">
    <img class="absolute left-0 w-full h-60 bg-cover" src="~/assets/landing-3.png" />
    <div
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
      class="z-10"
    >
      <div class="text-3xl">
        <p class="text-3xl text-white">Venha fazer parte da</p>
        <p class="font-bold text-h-purple text-3xl mt-2">He4rt Devs</p>
        <p class="w-3/4 mt-5 text-h-gray leading-6 md:leading-8 hidden md:flex">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue, velit sed scelerisque consequat, elit sem
          consequat erat, quis mollis nibh lacus eget mauris.
        </p>
      </div>
    </div>
    <div
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
      class="z-10"
    >
      <MaterialBtn>Entrar no Discord</MaterialBtn>
    </div>
  </div>
</template>
