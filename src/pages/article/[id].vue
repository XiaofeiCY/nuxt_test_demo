<script setup lang="ts">
const router = useRoute();
</script>
<template>
  <div>这是文章页面,id值为{{ router.params.id }}</div>
</template>
