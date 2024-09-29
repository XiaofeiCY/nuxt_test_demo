<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLink to="https://ithelp.ithome.com.tw/articles/10307570"> 图片存放位置区别 </NuxtLink>
    <NuxtLink to="https://ithelp.ithome.com.tw/articles/10330879"> 图片引用路径方式 </NuxtLink>

    <!-- <div>
      <h3> 存放在public下面的图片：public/images/publicDemo.jpg </h3>
      <NuxtImg src="/images/publicDemo.jpg" />
    </div> -->
    <div>
      <h3> 存放在assets下面的图片：assets/images/assetsDemo.jpg </h3>
      <p>放在assets下，需要在nuxtConfig文件配置图片路径，而public则不需要</p>
      <NuxtImg src="/assetsDemo.jpg" width="300" />
    </div>
  </div>
</template>
