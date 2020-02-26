<template>
  <div><br><br>
    Completed Module Code:

    <input type="text" maxlength="8" v-model="Module"/>
    <input type="button" value="Enter" v-on:click="CheckModule()"/>
    <h1>Completed Modules</h1>

    <div id="CM">
      <b>Core Modules</b>
      {{CompletedCore}}
    </div>
    <div id="PE">
      <b>Programme Electives</b>
    </div>
    <div id="UE">
      <b>Unrestricted Electives</b>
    </div>
    <div id="GE">
      <b>General Electives</b>
    </div>

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

import External from './ExternalWebpage_Core.vue'
import External2 from './ExternalWebpage_PE.vue'


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
      Module: "",
      extra: ""
    }
  },
  methods: {
    addModule() {
      this.extra = this.Module;
      //this.extra = "";
    },
    assign() {
      this.Module = this.mod;
      this.mod = "";

    }
  },
  components:{
    External,
    External2

  },

  methods: {
    CheckModule: function() {
      const searchTerm = this.Module.toUpperCase().trim();
      if (searchTerm == "") {
        alert("Enter something!");
      } 
      if (this.Core.indexOf(searchTerm) != -1 & this.CompletedCore.indexOf(searchTerm)==-1) {
          this.CompletedCore.push(searchTerm);
          this.UC_CM_Count-=4;
          this.CoreModule = searchTerm;
          // if (searchTerm == "IS4010") {
          //   this.UC_CM_Count -= 12;
          // } else if (searchTerm == "BT4101") {
          //   this.UC_CM_Count -= 12;
          // } else if (searchTerm == "BT4103") {
          //   this.UC_CM_Count -= 8;
          // } else {
          //   this.UC_CM_Count -= 4;
          // }
          }
        
      if (searchTerm.substring(0, 2) == "GE") {
            this.CompletedGE.push(searchTerm);
            this.UC_GE_Count -= 4;
          }
      else{
          //this.CompletedPE.push(searchTerm);
          this.PeModule = searchTerm;
        }      
       
      
      
      this.Module = "";
  }
}
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