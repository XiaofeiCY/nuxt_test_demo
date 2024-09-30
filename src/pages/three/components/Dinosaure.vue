<script setup lang="ts">
/**
 * 下载的模型如果加载不出来纹理，
 * 如果控制台报错：Unknown extension "KHR_materials_pbrSpecularGlossiness".
 * 看这个：https://blog.csdn.net/weixin_43865334/article/details/131461149
 * 全局安装npm install --global @gltf-transform/cli
 * 然后到模型目录下执行：gltf-transform metalrough 原模型名字.glb 转变模型名字.glb
 * 然后就可以正常加载了，注意材质纹理文件夹手动保存到模型目录下
 */
const { scene: model, animations } = await useGLTF('/dinosaur/output.gltf');
const { actions } = useAnimations(animations, model);
/**
 * actions.run是根据animations中的key值来播放的,可以打印animations的值出来看看里面有什么
 * 不同的模型里面可能不一样，比如这个恐龙模型有：
 * animations:roar、run、idle、bite、attack_tail
 */
const currentAction = ref(actions.run);
console.log('model', model, animations, actions);

currentAction.value.play();
</script>

<template>
  <primitive :object="model" />
</template>
