<template>
<div id="UE">
    <b>Unrestricted Electives</b>
    <div v-if="!extra.isEmpty">{{checkModule()}}</div>
    <div v-for="(ue,index) in completed_ue" :ue = "ue" :key="index">
    {{ue}}<button v-on:click="remove(ue)">x</button> </div>
</div>
</template>

<script>
export default {
  props: {
    Module: String,
    extra: String
  },
  data() {
    return {
        UE : [],
        completed_ue: []
    }
  },
  methods: {
    checkModule() {
      if (!this.completed_ue.includes(this.extra)) {
        this.completed_ue.push(this.extra);
      }
    },
    remove(x) {
      this.completed_ue.splice(this.completed_ue.indexOf(x), 1);
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
</style>