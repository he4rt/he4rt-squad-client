<template>
  <div v-motion="{
    initial: {
      opacity: 0,
      y: -50
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 200,
        duration: 500
      },
    }
  }" class="flex flex-wrap items-center justify-between w-full border-t-2 border-h-dark-one pt-20 pb-36">
    <LandingCounterItem first="Equipes" second="formadas" />
    <LandingCounterItem first="Membros" second="participando" />
    <LandingCounterItem first="Contribuições" second="feita" />
  </div>
</template>