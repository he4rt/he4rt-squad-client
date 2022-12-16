<<<<<<< HEAD
<template>
  <NuxtLink class="flex pl-0 lg:pl-10 gap-3 no-underline justify-center lg:justify-start items-center text-h-gray w-full py-5 hover:bg-h-dark-two hover:text-h-light cursor-pointer" :to="to" exactActiveClass="bg-h-dark-two !text-h-light">
    <slot name="icon" />
    <div class="hidden lg:flex">
      <slot />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
}>()
=======
<template>
  <NuxtLink class="flex pl-10 gap-3 no-underline items-center text-h-gray w-full py-5 hover:bg-h-dark-two hover:text-h-light cursor-pointer" :to="to" exactActiveClass="bg-h-dark-two !text-h-light">
    <slot name="icon" />
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
}>()
>>>>>>> 86c5315426aa2469cea6e64c83f104974ae49b87
</script>