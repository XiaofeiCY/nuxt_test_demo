<script setup lang="ts">
const { onLoop } = useRenderLoop();
const boxRef = ref();
// 自动旋转
onLoop(({ delta, elapsed, clock, dt }) => {
  // I will run at every frame ~ 60FPS (depending of your monitor)
  if (boxRef.value) {
    boxRef.value.rotation.y += delta;
    boxRef.value.rotation.z = elapsed * 0.2;
  }
});
</script>

<template>
  <TresCanvas window-size clear-color="#82dbc5">
    <!-- 相机位置 -->
    <TresPerspectiveCamera :position="[9, 9, 9]" />
    <!-- 手动控制 -->
    <OrbitControls />
    <TresMesh :rotation="[Math.PI / 4, Math.PI / 2, 0]" ref="boxRef">
      <TresBoxGeometry :args="[2, 1, 1]" />
      <TresMeshBasicMaterial color="yellow" />
      <TresAmbientLight color="#008080" />
    </TresMesh>
  </TresCanvas>
</template>
