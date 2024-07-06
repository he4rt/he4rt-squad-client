<template>
  <div
    class="pos[relative top-0 left-0] w:full h[min 100%] scroll[y auto] scroll[x hidden] bg:h-dark-one z:50 lg(w:15.625rem h[min 100vh])"
  >
    <div class="flex[v-center h-center] w:full h:5rem bg:h-purple">
      <img class="style:cursor-pointer" @click.prevent.stop="router.push('/')" src="~/assets/he4rt-1.svg" />
    </div>
    <div class="flex:row text[h-gray 700 1rem] w:full lg(flex:col)">
      <div class="hidden-in-mobile m[2rem 2.5rem] text:h-light">Menu</div>
      <DashboardAsideItem to="/dashboard/conquests">
        <template #icon>
          <IconStar class="w:1.5rem h:1.5rem" />
        </template>
        Conquistas
      </DashboardAsideItem>
      <DashboardAsideItem to="/dashboard/teams">
        <template #icon>
          <IconGroup class="w:1.5rem h:1.5rem" />
        </template>
        Seus times
      </DashboardAsideItem>
      <DashboardAsideItem to="/dashboard">
        <template #icon>
          <IconUser class="w:1.5rem h:1.5rem" />
        </template>
        Perfil
      </DashboardAsideItem>
      <DashboardAsideItem to="/">
        <template #icon>
          <IconLogout class="w:1.5rem h:1.5rem" />
        </template>
        Sair
      </DashboardAsideItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter()
</script>
