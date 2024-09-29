<script setup lang="ts">
const router = useRoute();
</script>

<template>
  <div>
    一个默认模板页面
    <slot></slot>
    <template v-if="router.path !== '/'">
      <NuxtLink to="/"> back to Home </NuxtLink>
    </template>
  </div>
</template>
