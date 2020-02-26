<template>
  <div>
    <br><br>
    Completed Module Code:

    <input type="text" maxlength="8" v-model="mod" v-on:keyup.enter="checkInput"/>
    <button v-on:click="checkInput">Add</button>
    <p id="Completed">
      <h1>Completed Modules</h1>
      <CoreMods v-bind:Module = "Module"></CoreMods>
      <PE v-bind:Module="Module"></PE>
      <UE v-bind:Module="Module" v-bind:extra = "extra"></UE>
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
    checkInput: function() {
      this.mod = this.mod.toUpperCase().trim();
      if (this.mod == "") {
        alert("Enter something!");
      } else {
        this.Module = this.mod;
        this.mod = "";
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  font-family: Helvetica, sans-serif;
}
h1 {
  color: black;
  text-align: center;
}
</style>