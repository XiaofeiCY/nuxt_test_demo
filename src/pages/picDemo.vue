<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLink to="https://ithelp.ithome.com.tw/articles/10307570"> 图片存放位置区别 </NuxtLink>
    <NuxtLink to="https://ithelp.ithome.com.tw/articles/10330879"> 图片引用路径方式 </NuxtLink>

    <div>
      <h3> 存放在public下面的图片：public/images/publicDemo.jpg </h3>
      <NuxtImg src="/images/publicDemo.jpg" width="300" />
    </div>
    <div>
      <h3> 存放在assets下面的图片：assets/images/assetsDemo.jpg </h3>
      <p>放在assets下的图片，如果想用NuxtImg标签导入图片，需要在nuxtConfig文件配置dir图片路径，而public则不需要</p>
      <p>否则直接使用img标签即可</p>
      <img src="~/assets/images/assetsDemo.jpg" width="300" />
    </div>
  </div>
</template>
