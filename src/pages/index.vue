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
</script>

<template>
  <div> 这是第一个页面{{ xx }} </div>
  <NuxtLink to="/about">去about页面：{{ userInfo.userName }}</NuxtLink>
  <div v-for="item in yy" :key="item.id">
    <ListItem :title="item.name" :id="item.id" />
  </div>
</template>
