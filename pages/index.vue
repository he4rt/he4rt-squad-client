<template>
  <div class="flex flex-col items-center min-h-screen w-full bg-h-dark-one">
    <div id="home" class="flex flex-col items-center h-screen w-full pt-20 landing-gradient">
      <img class="absolute md:w-auto w-2/4 right-0 top-10" src="~/assets/logo.svg" alt="He4rt Developers Logo" />
        <LandingHeader />
        <div class="flex flex-col w-5/6 gap-8 mt-40">
          <MaterialSpec>He4rt Teams</MaterialSpec>
          <p class="md:text-5xl text-3xl text-h-light font-bold w-auto md:w-3/5 leading-12 md:leading-16">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          <p class="text-h-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien erat, commodo ac accumsan cursus, aliquet in libero.</p>
          <MaterialBtn>Entrar com o Discord</MaterialBtn>
        </div>
    </div>
    <div id="ranking" class="flex gap-5 items-center flex-col w-full mt-20">
      <p class="font-spline text-h-light text-4xl font-bold w-11/12 md:w-1/2 text-center tracking-tight md:tracking-wide leading-12 md:leading-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum eros</p>
      <p class="font-spline text-h-gray text-lg text-center w-11/12 md:w-1/2 mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in venenatis mi. Pellentesque laoreet non magna nec volutpat.</p>
      <section class="flex flex-col gap-10 w-2/3">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-5 font-inter font-bold">
            <p class="text-h-light">Exibindo:</p>
            <p class="text-h-gray">Maior Nível</p>
          </div>
          <p class="relative left-12 md:left-15"><IconArrow class="w-6 h-6 text-h-purple transform rotate-90"/></p>
        </div>
        <div class="flex flex-col w-full gap-8 max-h-160 overflow-y-auto overflow-x-hidden pr-12 md:pr-16">
          <LandingList />
        </div>
        <NuxtLink to="/teams" class="font-bold no-underline text-center text-h-purple py-12 cursor-pointer">ver todas as equipes</NuxtLink>
      </section>
    </div>
    <div class="flex gap-5 items-center flex-col w-full mt-20 bg-h-dark-three">
      <div id="about" class="flex flex-col items-center md:items-start w-full md:w-5/6 mt-50 gap-30">
        <MaterialSpec>Sobre a He4rt</MaterialSpec>
        <div class="flex flex-wrap justify-between items-center w-5/6">
          <div class="flex flex-col gap-5 w-full lg:w-1/2">
            <p class="font-bold text-3xl text-h-light"><span class="text-h-purple text-3xl mr-1">He4rt Devs</span>dolor sit amet et tempor consectetur elit.</p>
            <p class="text-h-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue, velit sed scelerisque consequat, elit sem consequat erat, quis mollis nibh lacus eget mauris. Maecenas scelerisque laoreet commodo. Etiam aliquam est sed mattis consequat. Etiam dictum volutpat dolor sed ultricies. Nulla tortor nunc, laoreet id elementum vel, tempor et erat. Morbi tempor hendrerit aliquet. Ut quis fringilla enim. In a ligula tellus. In pellentesque pretium lorem. Vestibulum metus orci, imperdiet in quam vulputate, lobortis blandit eros. Aliquam pulvinar dictum lectus, nec fringilla nulla fringilla in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies ligula mauris.</p>
          </div>
          <img src="~/assets/landing-1.png" alt="Landing 1"/>
        </div>
        <div class="flex flex-wrap justify-between items-center w-full md:w-5/6">
          <img src="~/assets/landing-2.png" alt="Landing 1"/>
          <div class="flex flex-col gap-5 w-full lg:w-1/2">
            <p class="font-bold text-3xl text-h-light"><span class="text-h-purple text-3xl mr-1">He4rt Devs</span>dolor sit amet et tempor consectetur elit.</p>
            <p class="text-h-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue, velit sed scelerisque consequat, elit sem consequat erat, quis mollis nibh lacus eget mauris. Maecenas scelerisque laoreet commodo. Etiam aliquam est sed mattis consequat. Etiam dictum volutpat dolor sed ultricies. Nulla tortor nunc, laoreet id elementum vel, tempor et erat. Morbi tempor hendrerit aliquet. Ut quis fringilla enim. In a ligula tellus. In pellentesque pretium lorem. Vestibulum metus orci, imperdiet in quam vulputate, lobortis blandit eros. Aliquam pulvinar dictum lectus, nec fringilla nulla fringilla in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies ligula mauris.</p>
          </div>
        </div>
        <LandingCounter />
        <LandingBanner />
      </div>
      <div class="py-30" />
      <LandingFooter />
    </div>
  </div>
</template>