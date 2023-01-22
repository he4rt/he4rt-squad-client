<template>
  <div
    class="flex[wrap v-center h-between] w:full border[t 2 h-dark-one] p[t 5rem] p[b 9rem]"
    v-motion="{
      initial: {
        opacity: 0,
        y: -50,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: 200,
          duration: 500,
        },
      },
    }"
  >
    <LandingCounterItem first="Equipes" second="formadas" />
    <LandingCounterItem first="Membros" second="participando" />
    <LandingCounterItem first="Contribuições" second="feita" />
  </div>
</template>
