<template>
  <div id="CM">
    <b>Core Modules</b> 
    <div v-if="Module">{{checkModule()}}</div>
    <div v-for="(cm,index) in com_c" :cm = "cm" :key="index">
      {{cm}} 
      <span v-on:click="remove(cm)" id="button"> x </span>
    </div>
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
      lenC: 0
    }
  },
  methods: {
    checkModule() {
      if(!this.com_c.includes(this.Module)) {
        if (this.core.includes(this.Module)) {
          this.$store.dispatch("addModule", this.Module);
          this.$emit('changeC');
        }
      }
    },

    remove(x) {
      this.$store.dispatch("removeModule", x);
      this.$emit('changeC');
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
  background: #FAEBCC;
} 
@media only screen and (max-width: 768px) {
  #divL, #divR {
    float: none;
    display: block;
    width: 100%;
  }
}
#button {
  font-size: 20px;
  font-weight: 600;
  color: red;
  opacity: 0.4;
  cursor: pointer;
}
#button:hover {
  opacity: 1;
}
</style>