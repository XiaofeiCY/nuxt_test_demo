<script setup lang="ts">
import Dinosaure from './components/Dinosaure.vue';
// import { TresCanvas } from '@tresjs/core';
// import { OrbitControls } from '@tresjs/cientos';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three';
import * as TWEEN from '@tweenjs/tween.js';

// const position = ref<[number, number, number]>([2, 2, 3]);
const positionX = ref(2);
const aaa = ref();
let zzz = new TWEEN.Tween(positionX.value as any);
const gl = {
  // clearColor: '#F78B3D',
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
  // windowSize: true,
};
onMounted(() => {
  animate();
});

const xxx = () => {
  console.log('++++++++++++++');
  // position.value = [2, 3.5, 4];
  // const qq = {
  //   x: position.value[0],
  //   y: position.value[1],
  //   z: position.value[2],
  // };

  zzz = new TWEEN.Tween(positionX.value as any)
    .to(0)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate(() => {
      // positionX.value = 0;
      aaa.value.position.set(0, 2, 3);
    })
    .start();
};
const animate = () => {
  requestAnimationFrame(animate);
  zzz.update();
};
</script>
<template>
  <div class="canvas-page">
    <div class="div">
      <button @click="xxx">点击事件</button>
    </div>
    <div class="canvas-model">
      <TresCanvas v-bind="gl">
        <TresPerspectiveCamera ref="aaa" :position="[positionX, 2, 3]" :look-at="[0, 0.5, 0]" />
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
    top: 50px;
  }
  .canvas-article {
    width: 100%;
    height: 3300px;
  }
}
</style>
