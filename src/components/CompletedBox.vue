<template>
  <div><br><br>
    Completed Module Code:
    <input type="text" maxlength="8" v-model="Module"/>
    <input type="button" value="Enter" v-on:click="CheckModule()"/>

    <p id="Completed">
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
      <External :CoreModule = "CoreModule"/>
      <External2 :PeModule = "PeModule"/>

  </div>
</template>

<script>
import External from './ExternalWebpage_Core.vue'
import External2 from './ExternalWebpage_PE.vue'

export default {
  data() {
    return {
      CompletedCore: [],
      Module: "",
      CoreModule:"",
      PeModule:"",
      PE: [],
      CompletedPE: [],
      CompletedGE: [],
      CompletedUE: [],
      UC_CM_Count: 84,
      UC_PE_Count: 24,
      UC_UE_Count: 32,
      UC_GE_Count: 20,
      Core: ["BT1101", "CS1010S", "EC1301", "IS1103", "MA1101R", 
      "MA1521", "MA1102R", "MKT1705X", "BT2101", "BT2102", 
      "CS2030", "CS2040", "IS2101", "ST2334", "BT3102", "BT3103",
       "IS3103", "BT4103", "IS4010", "BT4101"]
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
#CM, #PE, #UE, #GE {
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  border: 2px solid black; 
  width: 25%;
  height: 180px;
  overflow: auto;
} 
#CM {
  background: #fbefcc;
}
#PE {
  background: #f9ccac;
}
#UE {
  background: #f4a688;
}
#GE {
  background: #e0876a;
}
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