<template>
  <div v-motion-dashboard class="h[max 100vh] w:100% bg:h-dark-three scroll:y">
    <div class="dashboard-sizer flex[col gap-3rem]">
      <DashboardHeader> Olá, <span class="text[700 lg h-purple]">Neextur</span> </DashboardHeader>
      <section class="pos:relative bg:h-dark-one h[min 100vh] w:full">
        <img alt="" class="pos[absolute left-0 top-0] w:full h:10rem bg:cover" src="~/assets/dashboard-1.png" />
        <img
          alt=""
          class="pos[relative left-2rem top-5rem] w:6rem h:6rem rounded:9999px z:10 border[2px solid h-gray]"
          src="https://i.imgur.com/vlU6ZAZ.jpg"
        />
        <section class="pos[relative top-6rem] flex[gap-1.25rem] m[l 2.5rem] flex[col gap-1.25rem] h[min 500px] w:full z:50">
          <div class="flex[wrap v-center gap-1.25rem]">
            <p class="text[dm-spline lg 700 h-light]">Tropa do Poze</p>
            <div class="flex[h-center gap-1.25rem]">
              <div class="p:0.125rem bg:h-dark-two rounded:0.25rem">
                <IconFire class="w[1rem] h[1rem] text:#CC0000" />
              </div>
              <div class="p:0.125rem bg:h-dark-two rounded:0.25rem">
                <IconFire class="w-4 h-41 text:#CC0000" />
              </div>
              <div class="p:0.125rem bg:h-dark-two rounded:0.25rem">
                <IconFire class="w:1rem h:1rem text:#CC0000" />
              </div>
              <div class="p:0.125rem bg:h-dark-two rounded:0.25rem">
                <IconFire class="w:1rem h:1rem text:#CC0000" />
              </div>
              <div class="p:0.125rem bg:h-dark-two rounded:0.25rem">
                <IconFire class="w:1rem h:1rem text:#CC0000" />
              </div>
            </div>
          </div>
          <div class="flex[wrap v-center h-start gap-2rem] w:85% p[b 1.25rem]">
            <p class="text:h-gray w:400px">Earth is the third planet from the Sun and the only astronomical object.</p>
            <div class="flex[col gap-3px dm-sans]">
              <p class="text[h-light lg 700]">000</p>
              <p class="text:h-gray">Contribuições realizadas</p>
            </div>
            <div class="flex[col gap-3px dm-sans]">
              <p class="text[h-light lg 700]">000</p>
              <p class="text:h-gray">Projetos finalizados</p>
            </div>
            <div class="flex[col gap-3px dm-sans]">
              <p class="text[h-light lg 700]">000</p>
              <p class="text:h-gray">Ranking atual</p>
            </div>
          </div>
          <div class="h:0.05rem w:90% bg:h-divider" />
        </section>
      </section>
    </div>
  </div>
</template>

<script>
  ;+definePageMeta({ layout: 'dashboard' })
</script>
