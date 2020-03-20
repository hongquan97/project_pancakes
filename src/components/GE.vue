<template>
<div id="GE">
    <b>General Electives</b>
    <div v-if="Module">{{checkModule()}}</div>
    <div v-for="(ge,index) in com_g" :ge = "ge" :key="index">
      {{ge}}   
      <button v-on:click="remove(ge)">x</button> 
    </div>
</div>
</template>

<script>
export default {
  props: {
    Module: String,
    com_g : Array
  },
  data() {
    return {
        GE : [],
        lenG: 0,
        moduleList: this.$store.getters.getList
    }
  },
  methods: { 
    checkModule() {
      if(!this.com_g.includes(this.Module)) {
        if(this.com_g.length == 5){
          this.$emit("goToUE", this.Module);
          return;
        }
      
      for (var i = 0; i < this.com_g.length; i++) {
        if (this.com_g[i].substring(0,3) == this.Module.substring(0,3)) {
            this.$emit("goToUE", this.Module);
            return;
        }
      } 

      if (this.Module.length == 7 && this.Module.substring(0,2)=="GE") {
        this.$store.dispatch("addGE", this.Module);
        this.$emit('changeG');
      }}
    },

    remove(x) {
      this.$store.dispatch("removeGE", x);
      this.$emit('changeG');
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
button {
  color: red;
}
</style>