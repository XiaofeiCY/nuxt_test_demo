<script setup lang="ts">
const { x, y } = useMouse();
const title = ref('about');
const changeTitle = () => {
  title.value = 'about2';
};
useHead({ title });
</script>

<template>
  <NuxtLayout name="header"></NuxtLayout>
  <div @click="changeTitle"> 这是一个about页面{{ x }}，{{ y }} </div>
</template>
