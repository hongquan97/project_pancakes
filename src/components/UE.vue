<template>
<div id="UE">
    <b>Unrestricted Electives</b>
    {{updateModules()}}
    <div v-if="extra">{{checkModule()}}</div>
    <div v-for="(ue,index) in com_u" :ue = "ue" :key="index">
    {{ue}}   <button v-on:click="remove(ue)">x</button></div>
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
        CompletedPE: this.$store.getters.getUE
    }
  },
  methods: {
    checkModule() {
      if (!this.com_u.includes(this.extra)&&this.extra.length>0) {
        this.com_u.push(this.extra);
        this.lenU = this.com_u.length;
      this.$emit('changeU', this.lenU);
      this.$store.dispatch("addUE", this.extra);
      }      
    },
    remove(x) {
      this.$emit('removeU', x);
      this.lenU = this.com_u.length;
      this.$emit('changeU', this.lenU);
      this.$store.dispatch("removeUE", x);
    },
    
    updateModules(){
      if(this.com_u.length==0){
        if(this.CompletedPE.length != 0){
          this.com_u = this.CompletedPE;
          this.lenU = this.com_u.length;
          this.$emit('changeU', this.lenU);
        }
      }
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