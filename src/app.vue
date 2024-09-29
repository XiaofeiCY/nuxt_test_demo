<script setup lang="ts">
// useHead({
//   title: '我的应用',
//   meta: [{ name: 'description', content: '我的神奇网站。' }],
//   bodyAttrs: {
//     class: 'test',
//   },
//   script: [{ innerHTML: "console.log('Hello world')" }],
// });
const title = ref('我的神奇网站');
useSeoMeta({
  title,
  ogTitle: '我的神奇网站',
  description: '这是我的神奇网站，让我来告诉你关于它的一切。',
  ogDescription: '这是我的神奇网站，让我来告诉你关于它的一切。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
