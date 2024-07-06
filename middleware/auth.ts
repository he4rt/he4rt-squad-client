export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore()

  if (!auth.session) {
    return navigateTo('/')
  }
})