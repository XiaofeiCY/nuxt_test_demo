<script setup lang="ts">
const router = useRoute();

const path = computed(() => {
  return router.path;
});
</script>

<template>
  <div>
    一个默认模板页面
    <slot></slot>
    <template v-if="path !== '/'">
      <NuxtLink to="/"> back to Home </NuxtLink>
    </template>
  </div>
</template>
