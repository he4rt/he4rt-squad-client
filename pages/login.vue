<template>
  <div class="flex[col v-center] h[min 100vh] w:100% bg:h-dark-three">
    <img class="pos[absolute right-0 top-10] w:50% md(w:reset-none)" src="~/assets/logo.svg" alt="He4rt Developers Logo" />
    <form @submit.prevent.stop="onSubmitForm" class="flex[col] z:10 bg:h-second-purple m[8rem 0] p:2rem rounded:0.75rem">
      <img src="~/assets/he4rt-1.svg" />
      <div class="flex[row]">
        <p @click="isLogin = false" class="flex:grow p[1rem] bg:h-dark-one text:h-light style:cursor-pointer">Registrar</p>
        <p @click="isLogin = true" class="flex:grow p[1rem] bg:h-dark-one text:h-light style:cursor-pointer">Entrar</p>
       </div>
      <div class="flex[col] m[1rem 0] text[h-light 1rem 700]">
        <label>Email</label>
        <input v-model="email" class="p:0.25rem rounded:0.25rem" type="email">
      </div>
      <div class="flex[col] m[1rem 0] text[h-light 1rem 700]">
        <label>Senha</label>
        <input v-model="password" class="p:0.25rem rounded:0.25rem" type="password">
      </div>
      <div v-if="!isLogin">
        <div class="flex[col] m[1rem 0] text[h-light 1rem 700]">
        <label>Nickname</label>
        <input v-model="nickname" class="p:0.25rem rounded:0.25rem" type="text">
      </div>
       <div class="flex[col] m[1rem 0] text[h-light 1rem 700]">
        <label>URL da Imagem (Opcional)</label>
        <input placeholder="https://i.imgur.com/vlU6ZAZ.jpg" v-model="image" class="p:0.25rem rounded:0.25rem" type="password">
      </div>
      </div>
      <button class="p[1rem] m[2rem 0] text[h-light 1.2rem] bg:h-purple">
        <span v-if="!spinner">Entrar</span>
        <IconSpinner v-else class="w:2rem h:2rem" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const image = ref('')
const nickname = ref('')

const spinner = ref(false)
const isLogin = ref(true)

const onSubmitForm = async () => {
  spinner.value = true 

  if(!email.value || password.value.length < 6) return

  const { data, error } = await useFetch('/auth', {
    body: {
      isLogin: isLogin.value,
      email: email.value,
      password: password.value,
      nickname: nickname.value,
      image: image.value || ''
    },
    baseURL: 'http://localhost:3333',
    method: 'POST'
  })

  spinner.value = false

  if(error.value) return

  // @ts-ignore
  auth.session = data.value

  router.push('/dashboard/teams')
}
</script>
