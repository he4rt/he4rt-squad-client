<template>
  <main class="flex min-h-screen w-full overflow-x-hidden antialiased bg-h-dark-three">
    <DashboardAside />
    <div class="flex-1 w-full min-h-screen">
      <slot />
    </div>
  </main>
</template>