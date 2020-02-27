<template>
      <div id="PE">
        
        <b>Programme Electives</b>
        <div v-if="Module">{{checkModule()}}</div>
      <div v-for="(pe,index) in com_p" :pe = "pe" :key="index">
    {{pe}} <button @click="remove(pe)">x</button></div>
    <!-- <External1 :PeM = "PeM"/>-->
      </div>
      
</template>

<script>
//import External from './ExternalWebpage_PE.vue'

export default {
  props: {
    Module: String,
    com_p: Array
  },
  components:{
    //External1
  },
  data() {
    return {
        PE : ["BT4013", "BT4016", "IS4228", "BT4012", "BT4221", "BT4222", "IS4234", "IS4302"],
        PeM: "",
        lenP: 0,
    }
  },
  methods: {
    checkModule() {
      if(!this.com_p.includes(this.Module)) {
        if (this.PE.includes(this.Module)) {
        this.com_p.push(this.Module);
        this.PeM = this.Module;
        } 
        this.lenP = this.com_p.length;
        this.$emit('changeP', this.lenP);
      }
    },
    remove(x) {
      this.$emit('removeP', x);
      this.lenP = this.com_p.length;
      this.$emit('changeP', this.lenP);
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