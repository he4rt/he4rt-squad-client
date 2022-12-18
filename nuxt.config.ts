export default defineNuxtConfig({
  css: ['@/assets/main.css'],
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],
  unocss: {
    uno: true,
    shortcuts: [
      {
        'dashboard-sizer': 'pt-6 md:pt-20 px-6 md:px-20 xl:px-30',
      },
    ],
    theme: {
      colors: {
        hPurple: '#8D3FFF',
        hSecondPurple: '#782BF1',
        hDarkOne: '#101010',
        hDarkTwo: '#151515',
        hDarkThree: '#090909',
        hDarkFour: '#1E1E1E',
        hDivider: '#393939',
        hUser: '#5E5E5E',
        hLight: '#F3F3F3',
        hGray: '#9B9B9B',
        hGraySelect: '#727272',
      },
    },
  },
  motion: {
    directives: {
      default: {
        initial: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
        },
      },
      dashboard: {
        initial: {
          x: 50,
          opacity: 0,
        },
        enter: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 500,
          },
        },
      },
      teams: {
        initial: {
          y: 50,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 500,
          },
        },
      },
    },
  },
})
