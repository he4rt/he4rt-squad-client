<template>
  <div class="flex[col v-center] h[min 100vh] w:100% bg:h-dark-three">
    <div class="landing-gradient flex[col v-center] h:100vh w:100% p[top 5rem]" id="home">
      <img class="pos[absolute right-0 top-10] w:50% md(w:reset-none)" src="~/assets/logo.svg" alt="He4rt Developers Logo" />
      <LandingHeader />
      <div
        class="flex[col gap-2rem] m[t 10rem] w:80%"
        v-motion="{
          initial: {
            x: 50,
            opacity: 0,
          },
          enter: {
            x: 0,
            opacity: 1,
            transition: {
              delay: 500,
              duration: 750,
            },
          },
        }"
      >
        <MaterialSpec>He4rt Teams</MaterialSpec>
        <p class="text[3xl 700 h-light] w:100% typo[line-3rem] md(typo[line-4rem] w:60% text[5xl 700 h-light])">
          Construa sonhos reais.
        </p>
        <p class="text:h-gray">
          Aproveite todo o poder da comunidade para alavancar os seus novos projetos.
        </p>
      </div>
    </div>
    <div
    v-motion="{
      initial: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 100,
          duration: 500,
        },
      },
    }"
      id="ranking"
      class="flex[col gap-5 v-center] w:100% m[top 5rem]"
    >
      <p
        class="text[center spline-sans h-light 4xl 700] w:90% tracking-tight typo[line-3rem] md(w:50% typo[line-4rem])"
      >
        Entre na lista dos melhores times
      </p>
      <p class="m[bottom 5rem] text[spline-sans h-gray lg center] w:90% md(w:50%)">
        Consulte projetos de outros membros para pairar novas ideias além de estar apoiando o próximo.
      </p>
      <section class="flex[col gap-10 w:66%]">
        <div class="flex[h-between v-center] m[b 0.75rem]">
          <div class="flex[v-center gap-5 1rem inter 700]">
            <p class="text:h-light">Exibindo:</p>
            <p class="text:h-gray">Maior Nível</p>
          </div>
          <p class="pos[relative left-3.5rem] md(pos[relative left-4.5rem])"><IconArrow class="w[1.5rem] h[1.5rem] text:h-purple tf[rotate-90deg]" /></p>
        </div>
        <div class="flex[col gap-8px] w:full h[max 640px] scroll:y scroll[x hidden] p[r 3rem] md(p[r 5.5rem])">
          <LandingList />
        </div>
      </section>
    </div>
    <div class="flex[col gap-5 v-center] w:100% m[t 5rem] bg:h-dark-three">
      <div id="about" class="flex[gap-30 col v-center] w:full md(flex[gap-30 col v-start] w:83%) m[t 12.5rem]">
        <LandingCounter />
        <LandingBanner />
      </div>
      <div class="p[7.5rem 0]" />
      <LandingFooter />
    </div>
  </div>
</template>
