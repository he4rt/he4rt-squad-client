export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      session: undefined
    }
  },
})
