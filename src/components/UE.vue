<template>
  <div id="UE">
    <b>Unrestricted Electives</b>
    <div v-if="extra">{{checkExtra()}}</div>
    <div v-if="Module">{{checkModule()}}</div>
    <div v-for="(ue,index) in com_u" :ue = "ue" :key="index">
      {{ue}}   
      <span @click="remove(ue)" id="button"> x </span>
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
      PeList: this.$store.getters.getPE,
      CoreList: this.$store.getters.getModules
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
          if( (!this.PeList.includes(this.Module)) && (!this.CoreList.includes(this.Module)) ){
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