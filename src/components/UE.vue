<template>
  <div id="UE">
    <b>Unrestricted Electives</b>
    <div v-if="extra">{{checkExtra()}}</div>
    <div v-if="Module">{{checkModule()}}</div>
    <div v-for="(ue,index) in com_u" :ue = "ue" :key="index">
      {{ue}}   
      <button @click="remove(ue)">x</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Module: String,
    extra: String,
    com_u: Array
  },
  data() {
    return {
      UE : [],
      lenU: 0,
      core: ["BT1101", "CS1010S", "EC1301", "IS1103", "MA1101R", "MA1521", "MA1102R", "MKT1705X", "BT2101",
      "BT2102", "CS2030", "CS2040", "IS2101", "ST2334", "BT3102", "BT3103", "IS3103", "BT4103", "IS4010",
      "BT4101"],
      PE: ["DBA3712", "IE3120", "IS3240", "BT4013", "BT4016", "BT4212", "DBA4811", "IS4250", "MKT4418",
      "IE2110", "DBA3701", "CS3244", "DBA3803", "BSE4711", "BT4012", "BT4015", "BT4221", "BT4222", 
      "BT4240", "IS4241", "IE4210", "ST3131", "ST4245", "IS3221", "I3261", "BT4014", "IS4228", "IS4302", "BT4211"]
    }
  },
  methods: {
    checkExtra(){
      if (!this.com_u.includes(this.extra)&&this.extra.length>0) {
        this.$store.dispatch("addUE", this.extra);
        this.$emit('changeU');     
      }
    },

    checkModule() {
      if (!this.com_u.includes(this.Module)) { 
        if(!(this.Module.substring(0,2)=="GE")){
          if( (!this.PE.includes(this.Module)) && (!this.core.includes(this.Module)) ){
            this.$store.dispatch("addUE", this.Module);
            this.$emit('changeU');
          }  
        } 
      }
    },

    remove(x) {
      this.$store.dispatch("removeUE", x);
      this.$emit('changeU');
    }
  }
}
</script>

<style scoped>
#UE {
  border-radius: 15px;
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  margin: 2px 2px;
  width: 24.5%;
  height: 180px;
  overflow: auto;
  background:#f4a688;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
button {
  color: red;
}
</style>