<template>
<div id="CM">
    <b>Core Modules</b><br> 
    <div v-if="Module">{{checkModule()}}</div>
    <div v-for="(cm,index) in com_c" :cm = "cm" :key="index">
    {{cm}}   <button v-on:click="remove(cm)"> x </button></div>
</div>
</template>

<script>
export default {
  props: {
    Module: String,
    com_c: Array
  },
  data() {
    return {
        core: ["BT1101", "CS1010S", "EC1301", "IS1103", "MA1101R", "MA1521", "MA1102R", "MKT1705X", "BT2101",
        "BT2102", "CS2030", "CS2040", "IS2101", "ST2334", "BT3102", "BT3103", "IS3103", "BT4103", "IS4010",
        "BT4101"],
        CM: "",
        added_module: "",
        lenC: 0
    }
  },
  methods: {
    checkModule() {
      if(!this.com_c.includes(this.Module)) {
        if (this.core.includes(this.Module)) {
          this.added_module = this.Module
        this.com_c.push(this.added_module);
        this.$store.dispatch("addModule", this.added_module);
        this.CM = this.Module;
        this.lenC = this.com_c.length;
        this.$emit('changeC', this.lenC);
        }
        
      }
    },
    remove(x) {
      this.$emit('removeC', x);
      this.lenC = this.com_c.length;
      this.$emit('changeC', this.lenC);
      this.$store.dispatch("removeModule", x);
    }
  }
}
</script>

<style scoped>
#CM {
  display: inline-block;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px;
  margin: 2px 2px; 
  width: 24.5%;
  height: 180px;
  overflow: auto;
  background: #fbefcc;
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