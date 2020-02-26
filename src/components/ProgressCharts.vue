<template>
  <div id="app" class = "container">
    <CMProgress></CMProgress>
    <PEProgress></PEProgress>
    <UEProgress></UEProgress>
    <GEProgress></GEProgress>
  </div>
</template>

<script>
import CMProgress from './CMProgress.vue'
import PEProgress from './PEProgress.vue'
import UEProgress from './UEProgress.vue'
import GEProgress from './GEProgress.vue'

export default {
  name: "app",
  components: {
    CMProgress,
    PEProgress,
    UEProgress,
    GEProgress
  }
};
</script>

<style lang="scss">
.container > div {
    display: inline-block;
    display: -moz-inline-box;
    *display: inline; /* For IE7 */
    zoom: 1; /* Trigger hasLayout */
    width: 25%;
    text-align: center;
}
</style>
