export const useGlobalStore = defineStore({
  id: 'global',
  state: () => {
    return {
      dashboard: {
        notifications: false,
      },
      load: {
        team: undefined
      }
    }
  },
})
