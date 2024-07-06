<template>
  <div class="flex[col v-center] h[min 100vh] w:100% bg:h-dark-three">
    <form @submit.prevent.stop="onSubmitForm" class="flex[col] bg:h-second-purple m[8rem 0] p:4rem rounded:0.75rem">
      <img src="~/assets/he4rt-1.svg" />
      <div class="flex[col] m[1rem 0] text[h-light 1rem 700]">
        <label>Email</label>
        <input v-model="email" class="p:0.25rem rounded:0.25rem" type="text">
      </div>
      <div class="flex[col] m[1rem 0] text[h-light 1rem 700]">
        <label>Senha</label>
        <input v-model="password" class="p:0.25rem rounded:0.25rem" type="password">
      </div>
      <button class="p[1rem] m[2rem 0] text[h-light 1.2rem] bg:h-purple">Entrar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const onSubmitForm = async () => {
  const { data, error } = await useFetch('/auth', {
    body: {
      email: email.value,
      password: password.value
    },
    baseURL: 'http://localhost:3333',
    method: 'POST'
  })

  if(error.value) return

  // @ts-ignore
  auth.session = data.value

  console.log(data.value)

  router.push('/dashboard')
}
</script>
