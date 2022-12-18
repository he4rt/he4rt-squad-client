<template>
  <div class="top-0 left-0 w-full lg:w-62.5 h-auto lg:min-h-screen overflow-y-auto bg-h-dark-one overflow-x-hidden shadow z-50">
    <div class="flex items-center justify-center h-20 bg-h-purple w-full">
      <img class="cursor-pointer" @click.prevent.stop="router.push('/')" src="~/assets/he4rt-1.svg" />
    </div>
    <div class="flex flex-row lg:flex-col w-full text-h-gray font-bold">
      <div class="ml-10 py-8 text-h-light hidden lg:flex">Menu</div>
      <DashboardAsideItem to="/dashboard/conquests">
        <template #icon>
          <IconStar class="w-6 h-6" />
        </template>
        Conquistas
      </DashboardAsideItem>
      <DashboardAsideItem to="/dashboard/teams">
        <template #icon>
          <IconGroup class="w-6 h-6" />
        </template>
        Seus times
      </DashboardAsideItem>
      <DashboardAsideItem to="/dashboard/teams/1">
        <template #icon>
          <IconGear class="w-6 h-6" />
        </template>
        Gerenciar time
      </DashboardAsideItem>
      <DashboardAsideItem to="/dashboard">
        <template #icon>
          <IconUser class="w-6 h-6" />
        </template>
        Perfil
      </DashboardAsideItem>
      <DashboardAsideItem to="/">
        <template #icon>
          <IconLogout class="w-6 h-6" />
        </template>
        Sair
      </DashboardAsideItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter()
</script>
