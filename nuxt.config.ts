// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  modules: [
    '@unocss/nuxt',
    // '@nuxtjs/supabase'
  ],
  unocss: {
    uno: true,
    icons: true,
    rules: [],
    theme: {
      colors: {
        'hPurple': '#8D3FFF',
        'hSecondPurple': '#782BF1',
        'hDarkOne': "#101010",
        'hDarkTwo': "#151515",
        'hDarkThree': "#090909",
        'hDivider': '#393939',
        'hLight': '#F3F3F3',
        'hGray': '#9B9B9B'
      },
    }
  },
  css: ['@/assets/main.css'],
})
