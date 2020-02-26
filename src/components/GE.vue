<template>
<div id="GE">
    <b>General Electives</b>
    <div v-if="Module!==none">{{checkModule()}}</div>
    <div v-for="(ge,index) in completed_ge" :ge = "ge" :key="index">
    {{ge}}<button v-on:click="remove(ge)">x</button> </div>
</div>
</template>

<script>
//import CompletedBox from './CompletedBox.vue'
export default {
  props: ['Module'],
  data() {
    return {
        GE : [],
        completed_ge: []
    }
  },
  methods: {
    checkModule() {
      if(!this.completed_ge.includes(this.Module)) {
      var i;
      for (i = 0; i < this.completed_ge.length; i++) {
        if (this.completed_ge[i].substring(0,3) == this.Module.substring(0,3)) {
          this.$emit("goToUE", this.Module);
          this.Module = "";
          return;
        }
      } if (this.Module.length == 7 && this.Module.substring(0,2)=="GE") {
        this.completed_ge.push(this.Module);
      }}
      this.Module = "";
    },
    remove(x) {
      this.completed_ge.splice(this.completed_ge.indexOf(x), 1);
    }
  }
}
</script>

<style scoped>
#GE {

  display: inline-block;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px;
  margin: 2px 2px;
  width: 24.5%;
  height: 180px;
  overflow: auto;
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