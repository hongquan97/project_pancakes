<template>
  <div id="PE">
    <b>Programme Electives</b>
    <div v-if="Module">{{checkModule()}}</div>
    <div v-for="(pe,index) in com_p" :pe = "pe" :key="index"> 
      {{pe}} 
      <button @click="remove(pe)">x</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Module: String,
    com_p: Array
  },
  data() {
    return {
      Financial : ["BT4013", "BT4016", "IS4228", "BT4012", "BT4221", "BT4222", "IS4234", "IS4302"],
      Marketing: ["BT4211", "BT4212", "BT4222", "BT4014", "BT4015", "BT4221", "IS3240", "IS4241"],
      A: ["DBA3712", "IE3120", "IS3240", "BT4013", "BT4016", "BT4221", "BT4212", "DBA4811", "IS4241", "IS4250", "MKT4418"],
      B: ["IE2110", "DBA3701", "CS3244", "DBA3803", "BSE4711", "BT4012", "BT4015", "BT4221", "BT4222", 
      "BT4240", "IS4241", "IE4210", "ST3131", "ST4245"],
      C: ["IS3221", "I3261", "BT4014", "IS4228", "IS4302"],
      PE:["DBA3712", "IE3120", "IS3240", "BT4013", "BT4016", "BT4221", "BT4212", "DBA4811", "IS4241", "IS4250", "MKT4418",
      "IE2110", "DBA3701", "CS3244", "DBA3803", "BSE4711", "BT4012", "BT4015", "BT4221", "BT4222", 
      "BT4240", "IS4241", "IE4210", "ST3131", "ST4245", "IS3221", "I3261", "BT4014", "IS4228", "IS4302"],
      lenP: 0,
      moduleList: this.$store.getters.getList
    }
  },
  methods: {
    checkModule() {     
      if(!this.com_p.includes(this.Module)) {
        if (this.com_p.length == 6) {
          this.$emit("goToUE", this.Module);
        }
        if (this.PE.includes(this.Module)) {
          if(this.A.includes(this.Module)){
            this.$store.dispatch("addA", this.Module)
          }
          if(this.B.includes(this.Module)){
            this.$store.dispatch("addB", this.Module)
          }
          if(this.C.includes(this.Module)){
            this.$store.dispatch("addC", this.Module)
          }
          this.lenP = this.com_p.length;
          this.$emit('changeP', this.lenP);
        } 
      }
    },

    remove(x) {
      this.$store.dispatch("removePE", x);
      this.$emit('changeP');
    }
  }
}
</script>

<style scoped>
#PE {
  display: inline-block;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px;
  margin: 2px 2px; 
  width: 24.5%;
  height: 180px;
  overflow: auto;
  background: #f9ccac;
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