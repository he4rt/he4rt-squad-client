<template>
  <div class="flex gap-5 items-center flex-col w-68.5 bg-h-dark-one font-dm p-5 rounded-lg">
    <ProviderIconButton>
      <IconDots class="relative left-28 transform rotate-90 h-6 w-6" />
    </ProviderIconButton>
    <img class="rounded-full w-24 h-24 border-2 border-h-divider" src="https://i.imgur.com/vlU6ZAZ.jpg" />
    <p class="text-h-light font-bold text-lg">Tropa do poze</p>
    <p class="text-center pb-5 leading-6 text-h-gray mb-2 border-b-2 border-h-divider">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div class="flex items-center justify-between w-full mb-5">
      <div class="flex flex-col gap-5">
        <p class="font-bold text-h-light">Projeto Atual:</p>
        <p class="text-h-gray">He4rt Squad</p>
      </div>
      <div class="flex flex-col gap-5">
        <p class="font-bold text-h-light">Nvl</p>
        <p class="text-h-gray">157</p>
      </div>
    </div>
    <button
      class="w-full py-3.5 border-none text-h-light font-semibold font-dm bg-h-second-purple rounded-lg mb-1 cursor-pointer tracking-wide transition-colors hover:bg-h-light hover:text-h-second-purple"
    >
      Ver equipe
    </button>
  </div>
</template>
