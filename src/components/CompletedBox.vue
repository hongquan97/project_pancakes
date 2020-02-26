<template>
  <div><br><br>
    Completed Module Code:

    <input type="text" maxlength="8" v-model="mod"/><button v-on:click="assign">Add</button>
    <p id="Completed">
      <h1>Completed Modules</h1>
      <CoreMods v-bind:Module = "Module"></CoreMods>
      <PE  v-bind:Module = "Module"></PE>
      <UE v-bind:Module = "Module" v-bind:extra = "extra"></UE>
    <GE @goToUE= "addModule" v-bind:Module = "Module"></GE>

    
  </div>
</template>

<script>
import CoreMods from './CoreMods.vue'
import PE from './PE.vue'
import GE from './GE.vue'
import UE from './UE.vue'

export default {
  components: {
    CoreMods,
    PE,
    GE,
    UE
  },
  data() {
    return {
      mod:"",
      Module:"",
      extra:""
    }
  },
  methods: {
    addModule() {
      this.extra = this.Module;
    },
    assign() {
      this.Module = this.mod;
      this.mod = "";

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (max-width: 768px) {
  #divL, #divR {
    float: none;
    display: block;
    width: 100%;
  }
}
h1 {
  color: black;
  text-align: center;
}
</style>