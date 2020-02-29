<template>
  <div>
    <br><br>
    Completed Module Code:
    <input type="text" maxlength="8" v-model="mod" v-on:keyup.enter="checkInput"/>
    <button v-on:click="checkInput">Add</button>
    <p id="Completed">
      <h1>Completed Modules</h1>

      <CoreMods @changeC= "addLenC($event)" @removeC = "removeC($event)" 
      v-bind:Module="Module" :com_c="com_c"></CoreMods>

      <PE @changeP= "addLenP($event)" @removeP = "removeP($event)"  @goToUE= "addModule"
      v-bind:Module="Module" :com_p="com_p"></PE>

      <UE @changeU= "addLenU($event)" @removeU = "removeU($event)" 
      v-bind:Module="Module" v-bind:extra="extra" :com_u="com_u"></UE>

      <GE @changeG= "addLenG($event)" @goToUE= "addModule" @removeG = "removeG($event)" 
      v-bind:Module="Module" :com_g="com_g"></GE>

    <div id="app" class = "container">
    <CMProgress :cm_len= parseFloat(cm_len)></CMProgress>
    <PEProgress :pe_len= parseFloat(pe_len)></PEProgress>
    <UEProgress :ue_len= parseFloat(ue_len)></UEProgress>
    <GEProgress :ge_len= parseFloat(ge_len)></GEProgress>
    </div>
  </div>
</template>

<script>
import CoreMods from './CoreMods.vue'
import PE from './PE.vue'
import GE from './GE.vue'
import UE from './UE.vue'
import CMProgress from './CMProgress.vue'
import PEProgress from './PEProgress.vue'
import UEProgress from './UEProgress.vue'
import GEProgress from './GEProgress.vue'

export default {
  components: {
    CoreMods,
    PE,
    GE,
    UE,
    CMProgress,
    PEProgress,
    UEProgress,
    GEProgress
  },
  data() {
    return {
      mod:"",
      Module:"",
      extra:"",
      cm_len: 0.00,
      pe_len: 0.00,
      ue_len: 0.00,
      ge_len: 0.00,
      com_c: [],
      com_p: [],
      com_u: [],
      com_g: [],

    }
  },
  methods: {
    addModule() {
      this.extra = this.Module;
      this.Module = "";
    },
    checkInput: function() {
      this.mod = this.mod.toUpperCase().trim();
      if (this.mod == "") {
        alert("Enter something!");
      } else {
        this.Module = this.mod;
        this.mod = "";
      }
    },
    addLenC: function(num) {
      this.cm_len = ((num*400)/72).toFixed(2);
    },
    addLenP: function(num) {
      this.pe_len = ((num*400)/24).toFixed(2);
    },
    addLenU: function(num) {
      this.ue_len = ((num*400)/32).toFixed(2);
    },
    addLenG: function(num) {
      this.ge_len = ((num*400)/20).toFixed(2);
    },
    removeC(x) {
      const indexC = this.com_c.indexOf(x);
      this.com_c.splice(indexC, 1);
      this.Module = "";
    },
    removeP(x) {
      const indexP = this.com_p.indexOf(x)
      this.com_p.splice(indexP, 1);
      this.Module = "";
    },
    removeG(x) {
      const indexG = this.com_g.indexOf(x);
      this.com_g.splice(indexG, 1);
      this.Module = "";
    },
    removeU(x) {
      const indexU = this.com_u.indexOf(x);
      this.com_u.splice(indexU, 1);
      this.extra = "";
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
.container > div {
    display: inline-block;
    display: -moz-inline-box;
    *display: inline; /* For IE7 */
    zoom: 1; /* Trigger hasLayout */
    width: 25%;
    text-align: center;
}
</style>