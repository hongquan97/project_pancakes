<template>
  <div>
    <br><br>
    Completed Module Code:
    <input type="text" maxlength="8" v-model="mod" v-on:keyup.enter="checkInput"/>
    <button v-on:click="checkInput">Add</button>
    <p id="Completed">
      <h1>Completed Modules</h1>

      <CoreMods @changeC= "updateLenC()" 
      v-bind:Module="Module" :com_c="com_c"></CoreMods>

      <PE @changeP= "updateLenP()" @goToUE= "addModule"
      v-bind:Module="Module" :com_p="com_p"></PE>

      <UE @changeU= "updateLenU()" 
      v-bind:Module="Module" v-bind:extra="extra" :com_u="com_u"></UE>

      <GE @changeG= "updateLenG()" @goToUE= "addModule"
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
  import CoreMods from './CM.vue'
  import PE from './PE.vue'
  import GE from './GE.vue'
  import UE from './UE.vue'
  import CMProgress from './CMProgress.vue'
  import PEProgress from './PEProgress.vue'
  import UEProgress from './UEProgress.vue'
  import GEProgress from './GEProgress.vue'
  //import database from '../../firebase.js'
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
        numOfMC: 0,
        cm_len: 0.00,
        pe_len: 0.00,
        ue_len: 0.00,
        ge_len: 0.00,
        com_c: this.$store.getters.getModules,
        com_p: this.$store.getters.getPE,
        com_u: this.$store.getters.getUE,
        com_g: this.$store.getters.getGE,
      list_of_modules: [], // consists of all the valid module codes
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
      } else if (this.ge_len == 100) { // when GE reaches 100%
        alert("You have fulfilled the General Electives requirement. This module will go to your Unrestricted Electives instead.")
        this.Module = this.mod;
        this.mod = "";
      } else if (this.pe_len == 100) { // when PE reaches 100%
        alert("You have fulfilled the Programme Electives requirement. This module will go to your Unrestricted Electives instead.")
        this.Module = this.mod;
        this.mod = "";
      } else if (!this.list_of_modules.includes(this.mod)){ // check for invalid module code
        alert("This module does not exist! Please enter a valid module code.")
        this.mod = "";
      } else {
        this.Module = this.mod;
        this.mod = "";
      }
    },
    updateLenC: function() {
      this.Module = "";
      this.numOfMC = 0;
      for (var i = 0; i < this.com_c.length; i++) {
        if (this.com_c[i] == "BT4101" || this.com_c[i] == "IS4010") {
          this.numOfMC += 12;
        } else if (this.com_c[i] == "BT4013") {
          this.numOfMC += 8;
        } else {
          this.numOfMC += 4;
        }
      }

      this.cm_len = ((this.numOfMC*100)/84).toFixed(2);
    },

    updateLenP: function() {
      this.Module = "";
      this.numOfMC = 0;
      for (var i = 0; i < this.com_p.length; i++) {
        this.numOfMC += 4;
      }

      this.pe_len = ((this.numOfMC*100)/24).toFixed(2);
    },

    updateLenU: function() {
      this.Module = "";
      this.numOfMC = 0;
      for (var i = 0; i < this.com_u.length; i++) {
        this.numOfMC += 4;
      }
      
      this.ue_len = ((this.numOfMC*100)/32).toFixed(2);
    },

    updateLenG: function() {
      this.Module = "";
      this.numOfMC = 0;
      for (var i = 0; i < this.com_g.length; i++) {
        this.numOfMC += 4;
      }

      this.ge_len = ((this.numOfMC*100)/20).toFixed(2);
    },

    fetchItems:function() {
      //let item = {}
      //let MC = {}
      //database.collection('moduleInfo').get().then((querySnapShot) => {
      //  querySnapShot.forEach(doc => {
      //    item = doc.data().moduleCode;
      //    MC = doc.data().MC;
      //    this.list_of_modules.push({Code: item, ModCredits: MC});
      //  })
      //})
      this.list_of_modules.push("ACC1002");
      this.list_of_modules.push("ACC1006");
      this.list_of_modules.push("IS4010");
      this.list_of_modules.push("BT1101");
      this.list_of_modules.push("BT4016");
      this.list_of_modules.push("GET1028");
      this.list_of_modules.push("GET1001");
      this.$store.dispatch("addList", this.list_of_modules);
    },
  },
  
  created() {
    this.fetchItems();
    this.updateLenC();
    this.updateLenP();
    this.updateLenU();
    this.updateLenG();
  }
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