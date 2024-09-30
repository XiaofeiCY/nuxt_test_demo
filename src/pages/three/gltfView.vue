<script setup lang="ts">
import Dinosaure from './components/Dinosaure.vue';
// import { TresCanvas } from '@tresjs/core';
// import { OrbitControls } from '@tresjs/cientos';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three';

const gl = {
  // clearColor: '#F78B3D',
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
  // windowSize: true,
};
</script>
<template>
  <div class="canvas-page">
    <div class="canvas-model">
      <TresCanvas v-bind="gl">
        <TresPerspectiveCamera :position="[2, 2, 3]" :look-at="[0, 0.5, 0]" />
        <!-- 鼠标控制模型移动 -->
        <!-- <OrbitControls /> -->
        <Suspense>
          <Dinosaure></Dinosaure>
        </Suspense>
        <TresDirectionalLight color="#F78B3D" :position="[3, 3, 3]" :intensity="1" />
        <TresAmbientLight :intensity="2" />
      </TresCanvas>
    </div>
    <div class="canvas-article bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-100%"> </div>
  </div>
</template>
<style lang="scss" scoped>
.canvas-page {
  width: 100%;
  position: relative;
  .canvas-model {
    width: 100%;
    height: 800px;
    position: fixed;
    top: 0;
  }
  .canvas-article {
    width: 100%;
    height: 3300px;
  }
}
</style>
