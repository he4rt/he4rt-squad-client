<template>
  <div v-motion-dashboard class="min-h-screen w-full bg-h-dark-three overflow-y-hidden">
    <div class="flex flex-col gap-15 pt-20 px-30">
      <header class="flex justify-between items-center w-full">
        <p class="font-bold text-lg text-h-light">Olá, <span class="font-bold text-lg text-h-purple">Neextur</span></p>
        <div class="flex gap-5 items-center">
          <IconAlert class="w-7 h-7 text-h-divider"/>
          <div class="h-8 w-0.5 bg-h-divider" />
          <p class="ml-5 text-h-light">NeexTuRHe4rt</p>
          <img class="w-12 h-12 rounded-full" src="https://i.imgur.com/vlU6ZAZ.jpg"/>
        </div>
      </header>
      <section class="relative bg-h-dark-one min-h-100 w-full">
        <img alt="" class="absolute left-0 top-0 w-full h-40 bg-cover" src="~/assets/dashboard-1.png" />
        <img alt="" class="relative left-8 top-20 w-24 h-24 rounded-full z-10 border-2 border-h-gray" src="https://i.imgur.com/vlU6ZAZ.jpg"/>
        <section class="relative flex-col ml-10 top-24 flex gap-5 w-full z-50 min-h-125">
          <div class="flex items-center gap-5">
            <p class="font-bold text-h-light text-lg font-spline">Tropa do Poze</p>
            <div class="flex items-center gap-5">
              <div class="p-0.5 bg-h-dark-two rounded">
                <IconFire class="w-4 h-4 text-red-600" />
              </div>
              <div class="p-0.5 bg-h-dark-two rounded">
                <IconFire class="w-4 h-4 text-red-600" />
              </div>
              <div class="p-0.5 bg-h-dark-two rounded">
                <IconFire class="w-4 h-4 text-red-600" />
              </div>
              <div class="p-0.5 bg-h-dark-two rounded">
                <IconFire class="w-4 h-4 text-red-600" />
              </div>
              <div class="p-0.5 bg-h-dark-two rounded">
                <IconFire class="w-4 h-4 text-red-600" />
              </div>
            </div>
          </div>
          <div class="flex items-center w-6/7 justify-between border-b border-h-divider pb-5">
            <p class="text-h-gray w-100 leading-8">Earth is the third planet from the Sun and the only astronomical object.</p>
            <div class="flex flex-col gap-3 font-dm-sans">
              <p class="text-h-light text-lg font-bold">000</p>
              <p class="text-h-gray">Contribuições realizadas</p>
            </div>
            <div class="flex flex-col gap-3 font-dm-sans">
              <p class="text-h-light text-lg font-bold">000</p>
              <p class="text-h-gray">Projetos finalizados</p>
            </div>
            <div class="flex flex-col gap-3 font-dm-sans">
              <p class="text-h-light text-lg font-bold">000</p>
              <p class="text-h-gray">Ranking atual</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
+ definePageMeta({ layout: 'dashboard' })
</script>