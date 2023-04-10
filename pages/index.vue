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
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <p class="text:h-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien erat, commodo ac accumsan cursus, aliquet in
          libero.
        </p>
        <MaterialBtn>Entrar com o Discord</MaterialBtn>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum eros
      </p>
      <p class="m[bottom 5rem] text[spline-sans h-gray lg center] w:90% md(w:50%)">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in venenatis mi. Pellentesque laoreet non magna nec
        volutpat.
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
        <NuxtLink to="/teams" class="text[700 1rem center] typo[decoration-none] style:cursor-pointer p[3rem 0]"
          >ver todas as equipes</NuxtLink
        >
      </section>
    </div>
    <div class="flex[col gap-5 v-center] w:100% m[t 5rem] bg:h-dark-three">
      <div id="about" class="flex[gap-30 col v-center] w:full md(flex[gap-30 col v-start] w:83%) m[t 12.5rem]">
        <MaterialSpec>Sobre a He4rt</MaterialSpec>
        <div
          class="flex[wrap-reverse h-between v-center] w:83% md(flex[wrap h-between v-center])"
          v-motion="{
            initial: {
              opacity: 0,
              x: -100,
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
          <div class="flex[col gap-5] w:full lg(w:50%)">
            <p class="text[3xl 700 h-light]">
              <span class="text[h-purple 3xl] m[r 0.25rem]">He4rt Devs</span>dolor sit amet et tempor consectetur elit.
            </p>
            <p class="text:h-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue, velit sed scelerisque consequat, elit sem
              consequat erat, quis mollis nibh lacus eget mauris. Maecenas scelerisque laoreet commodo. Etiam aliquam est sed
              mattis consequat. Etiam dictum volutpat dolor sed ultricies. Nulla tortor nunc, laoreet id elementum vel, tempor et
              erat. Morbi tempor hendrerit aliquet. Ut quis fringilla enim. In a ligula tellus. In pellentesque pretium lorem.
              Vestibulum metus orci, imperdiet in quam vulputate, lobortis blandit eros. Aliquam pulvinar dictum lectus, nec
              fringilla nulla fringilla in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies ligula
              mauris.
            </p>
          </div>
          <img src="~/assets/landing-1.png" alt="Landing 1" />
        </div>
        <div
          class="flex[wrap h-between v-center] w:83%"
          v-motion="{
            initial: {
              opacity: 0,
              x: 100,
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
          <img src="~/assets/landing-2.png" alt="Landing 1" />
          <div class="flex[col gap-5] w:100% lg(w:50%)">
            <p class="text[700 3xl h-light]">
              <span class="text[h-purple 3xl] m[r 0.25rem]">He4rt Devs</span>dolor sit amet et tempor consectetur elit.
            </p>
            <p class="text:h-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue, velit sed scelerisque consequat, elit sem
              consequat erat, quis mollis nibh lacus eget mauris. Maecenas scelerisque laoreet commodo. Etiam aliquam est sed
              mattis consequat. Etiam dictum volutpat dolor sed ultricies. Nulla tortor nunc, laoreet id elementum vel, tempor et
              erat. Morbi tempor hendrerit aliquet. Ut quis fringilla enim. In a ligula tellus. In pellentesque pretium lorem.
              Vestibulum metus orci, imperdiet in quam vulputate, lobortis blandit eros. Aliquam pulvinar dictum lectus, nec
              fringilla nulla fringilla in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies ligula
              mauris.
            </p>
          </div>
        </div>
        <LandingCounter />
        <LandingBanner />
      </div>
      <div class="p[7.5rem 0]" />
      <LandingFooter />
    </div>
  </div>
</template>
