<template>
  <div>
    <br>
    Completed Module Code:
    <input type="text" maxlength="8" v-model="mod" v-on:keyup.enter="checkInput"/>
    <button v-on:click="checkInput">Add</button>
    <br>

    <p>Completed Modules</p>

    <CoreMods @changeC= "updateLenC()" 
    v-bind:Module="Module" :com_c="com_c"></CoreMods>

    <PE @changeP= "updateLenP()" @goToUE= "addModule"
    v-bind:Module="Module" :com_p="com_p"></PE>

    <UE @changeU= "updateLenU()" 
    v-bind:Module="Module" v-bind:extra="extra" :com_u="com_u"></UE>

    <GE @changeG= "updateLenG()" @goToUE= "addModule"
    v-bind:Module="Module" :com_g="com_g"></GE>

    <div id="app" class="container">
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
  import database from '../../firebase.js'
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
        list_of_modules: this.$store.getters.getList // consists of all NUS modules
    }
  },

  methods: {
    addModule() {
      this.extra = this.Module;
      this.Module = "";
    },

    checkInput: function() {
      if (!this.$store.state.selected){
        alert("HELLO DONT BE FUNNY select course of study first!");
        return;
      }
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
      } else if (!this.list_of_modules.find(o =>o.code == this.mod)){ // check for invalid module code
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
        this.numOfMC += this.list_of_modules.find(o =>o.code == this.com_c[i]).mc;
      }
      this.cm_len = ((this.numOfMC*100)/84).toFixed(2);
    },
    updateLenP: function() {
      this.Module = "";
      this.numOfMC = 0;
      for (var i = 0; i < this.com_p.length; i++) {
        this.numOfMC += this.list_of_modules.find(o =>o.code == this.com_p[i]).mc;
      }
      this.pe_len = ((this.numOfMC*100)/24).toFixed(2);
    },
    updateLenU: function() {
      this.Module = "";
      this.numOfMC = 0;
      for (var i = 0; i < this.com_u.length; i++) {
        this.numOfMC += this.list_of_modules.find(o =>o.code == this.com_u[i]).mc
      }
      this.ue_len = ((this.numOfMC*100)/32).toFixed(2);
    },
    updateLenG: function() {
      this.Module = "";
      this.numOfMC = 0;
      for (var i = 0; i < this.com_g.length; i++) {
        this.numOfMC += this.list_of_modules.find(o =>o.code == this.com_g[i]).mc
      }
      this.ge_len = ((this.numOfMC*100)/20).toFixed(2);
    },
    fetchItems: function() {
      if (this.list_of_modules.length == 0) {
        let item = {}
        database.collection('moduleInfo').get().then((querySnapShot) => {
          querySnapShot.forEach(doc => {
            item = {code : doc.data().moduleCode, mc: parseInt(doc.data().moduleCredit)};
        /* 
        it again since NUS modules are fixed for the semester. We will make 
        use of the module information stored in our users' local storage. 
        */
      } 
    }
   }
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
  font-family: -apple- system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, 
  Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
p {
  font-family: -apple- system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, 
  Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 2rem;
  font-weight: 600;
  color: black;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}
.container > div {
  display: inline-block;
  display: -moz-inline-box;
  *display: inline; /* For IE7 */
  zoom: 1; /* Trigger hasLayout */
  width: 25%;
  text-align: center;
}
input {
  font-family: -apple- system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, 
  Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  border-radius: 8px;
  padding: 1px 10px;
  font-weight: 400;
  margin-left: 0.2em;
  margin-right: 0.5em;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(169, 169, 169);
}
input:focus {
  outline: none;
  box-shadow: 0 0 3pt 3pt #FAEBCC;
}
button {
  font-family: -apple- system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, 
  Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  border-radius: 8px;
  border-width: 2px;
  background-color: initial;
  padding: 1px 10px;
}
button:focus {
  outline: none;
  box-shadow: 0 0 3pt 3pt #FAEBCC;
}
</style>
