<script setup lang="ts">
const xx = ref(123);
</script>

<template>
  <NuxtLayout name="header"></NuxtLayout>
  <div> 这是一个about页面{{ xx }} </div>
</template>
