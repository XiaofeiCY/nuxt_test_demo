<script setup lang="ts">
import Dinosaure from './components/Dinosaure.vue';
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three';

const gl = {
  clearColor: '#F78B3D',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
  windowSize: true,
};
</script>
<template>
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
</template>
