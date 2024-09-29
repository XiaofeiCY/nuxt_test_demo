<script setup lang="ts">
const { locale, setLocale } = useI18n();

const router = useRoute();
</script>
<template>
  <div>
    这是文章页面,id值为{{ router.params.id }}
    <br />
    当前语言为{{ locale }}
    <div>
      <button @click="setLocale('zh')">zh</button>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>
      <p>{{ $t('Hello World') }}</p>
    </div>
  </div>
</template>
