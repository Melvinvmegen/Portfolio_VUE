<template lang="pug">
  .header-right
    vue-particles(color="#254A5D"
                  :particleOpacity="0.6"
                  :particlesNumber="400"
                  shapeType="circle"
                  :particleSize="1"
                  linesColor="#254A5D"
                  :linesWidth="1"
                  :lineLinked="true"
                  :lineOpacity="0.6"
                  :linesDistance="100"
                  :moveSpeed="1"
                  :hoverEffect="true"
                  hoverMode="grab"
                  :clickEffect="true"
                  clickMode="push")
</template>

<script>
export default {

}
</script>

<style>
  .particles-js-canvas-el {
    width: 336px !important;
    height: 270px !important;
  }

  .header-right {
    width: 35%;
  }

</style>
