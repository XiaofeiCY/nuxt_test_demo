<script setup lang="ts">
useHead({ title: 'about' });
const { x, y } = useMouse();
</script>

<template>
  <NuxtLayout name="header"></NuxtLayout>
  <div> 这是一个about页面{{ x }}，{{ y }} </div>
</template>
