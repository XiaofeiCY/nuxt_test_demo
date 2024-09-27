<script setup lang="ts">
const props = defineProps(['title', 'id']);
const launchTo = () => {
  navigateTo(`/article/${props.id}`);
};
</script>

<template>
  <div class="section">
    <div>放一个header</div>
    <div @click="launchTo" class="main">放一个main===文章名字：{{ props.title }}</div>
    <div>放一个footer</div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  margin-bottom: 16px;
}
.main {
  cursor: pointer;
  &:hover {
    background-color: $bgColor;
  }
}
</style>
