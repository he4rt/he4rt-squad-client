export default defineNuxtConfig({
  extends: [
    'nuxt-seo-kit'
  ],
  imports: {
    dirs: ['stores', 'composables'],
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Awesome Site',
      siteDescription: 'Welcome to my awesome site!',
      language: 'pt-BR',
      indexable: true
    }
  },
  css: ['@/assets/main.css'],
  modules: [
    'nuxt-ununura',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],
  ununura: {
    defines: [
      ['dashboard-sizer', 'p[1.5rem] md(p[5rem]) xl(p[7.5rem])'],
      ['hidden-in-mobile', 'display:none lg(display:inline)']
    ],
    extend: {
      supporters: {
        fonts: [
          ['inter', 'Inter'],
          ['spline-sans', 'Spline Sans'],
          ['dm-sans', 'DM Sans']
        ],
        units: [
          ['reset-none', 'none'],
          ['full', '100%'],
          ['xs', '0.75rem'],
          ['sm', '0.875rem'],
          ['base', '1rem'],
          ['lg', '1.125rem'],
          ['xl', '1.25rem'],
          ['2xl', '1.5rem'],
          ['3xl', '1.75rem'],
          ['4xl', '2.25rem'],
          ['5xl', '3rem'],
          ['6xl', '3.75rem'],
        ],
        colors: [
          ['h-purple', '#8D3FFF'],
          ['h-second-purple', '#782BF1'],
          ['h-dark-one', 'rgba(255, 255, 255, 0.05)'],
          ['h-dark-two', '#151515'],
          ['h-dark-three', '#090909'],
          ['h-dark-four', '#1E1E1E'],
          ['h-divider', '#393939'],
          ['h-user', '#5E5E5E'],
          ['h-light', '#F3F3F3'],
          ['h-gray', '#9B9B9B'],
          ['h-gray-select', '#727272'],
          ['h-dashboard-aside', 'rgba(0, 0, 0, 0.5)'],
        ],
      }
    }
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
