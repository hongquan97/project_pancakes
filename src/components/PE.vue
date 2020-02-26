<template>
      <div id="PE">
        <b>Programme Electives</b>
        <div v-if="Module!==none">{{checkModule()}}</div>
    <div v-for="(pe,index) in completed_pe" :pe = "pe" :key="index">
    {{pe}} <button v-on:click="remove(pe)">x</button></div>
      </div>
</template>

<script>
//import CompletedBox from './CompletedBox.vue'
export default {
  props: ['Module'],
  data() {
    return {
        PE : ["BT4013", "BT4016", "IS4228", "BT4012", "BT4221", "BT4222", "IS4234", "IS4302"],
        completed_pe: [],
    }
  },
  methods: {
    checkModule() {
      if(!this.completed_pe.includes(this.Module)) {
        if (this.PE.includes(this.Module)) {
        this.completed_pe.push(this.Module);
        } 
      } // if (!this.PE.includes(this.Module)) {
        //.$emit("goToUE", this.Module);
        //return;
     // } 
      this.Module = "";
    },
    remove(x) {
      this.completed_pe.splice(this.completed_pe.indexOf(x), 1);
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
</style>