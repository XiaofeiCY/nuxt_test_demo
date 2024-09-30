<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore';

const xx = ref(1);
const yy = ref([
  {
    id: 1,
    name: 'aaa',
  },
  {
    id: 2,
    name: 'bbb',
  },
  {
    id: 3,
    name: 'ccc',
  },
  {
    id: 4,
    name: 'ddd',
  },
]);
const zz = useUserStore();
const { userInfo } = storeToRefs(zz);

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="section shadow-sm"> 这是第一个页面{{ xx }} </div>
  <div class="section shadow-sm bg-gray-300">
    <NuxtLink to="/about">去about页面：{{ userInfo.userName }}</NuxtLink>
    <div class="article">
      <NuxtLink to="https://www.vuemastery.com/blog/building-a-3d-scene-in-nuxt-with-tresjs/"> 3D+nuxt结合使用文章链接 </NuxtLink>
      <NuxtLink to="https://tresjs.org/"> 3d官网 </NuxtLink>
    </div>
  </div>
  <div class="section shadow-sm bg-gray-300">
    <NuxtLink to="/three">去three页面</NuxtLink>
  </div>
  <div class="section shadow-sm bg-gray-300">
    <NuxtLink to="/picDemo">去pic页面</NuxtLink>
  </div>

  <ClientOnly>
    <div class="section click_div shadow-sm" @click="toggleDark()"> 当前模式：{{ isDark ? 'dark' : 'light' }} </div>
  </ClientOnly>

  <div v-for="item in yy" :key="item.id">
    <ListItem :title="item.name" :id="item.id" />
  </div>
</template>

<style lang="scss" scoped>
.section {
  margin-bottom: 8px;
}
.click_div {
  cursor: pointer;
  // color: #fff;
}
</style>
