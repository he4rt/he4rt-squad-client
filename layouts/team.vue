<template>
  <div class="flex flex-col min-h-screen w-full bg-h-dark-two py-20 antialiased">
    <div class="px-10">
      <h1 class="text-3xl font-bold text-h-light pb-8 border-b-2 border-h-divider">
        Gerenciar: <span class="text-3xl font-bold text-h-second-purple">Tropa do Poze</span>
      </h1>
      <div class="flex gap-5 mt-10 items-center">
        <NuxtLink
          class="no-underline text-h-gray font-dm-sans text-lg font-medium text-lg"
          exactActiveClass="!text-h-light"
          to="/dashboard/teams/control/register"
        >
          Informações</NuxtLink
        >
        <p class="text-h-gray">|</p>
        <NuxtLink
          class="no-underline text-h-gray font-dm-sans text-lg font-medium text-lg"
          exactActiveClass="!text-h-light"
          to="/dashboard/teams/control/accept"
        >
          Aceitar membros
        </NuxtLink>
        <p class="text-h-gray">|</p>
        <NuxtLink
          class="no-underline text-h-gray font-dm-sans text-lg font-medium text-lg"
          exactActiveClass="!text-h-light"
          to="/dashboard/teams/control/roles"
        >
          Cargos
        </NuxtLink>
      </div>
      <p class="my-5 text-h-gray">
        Earth is the third planet from the Sun and the only astronomical object known to harbor life.
      </p>
      <slot />
    </div>
  </div>
</template>
