<template>
  <div>
    Completed Module Code:
    <input type="text" maxlength="8" v-model="Module"/>

    <p id="Completed">
      <h1>Completed Modules</h1>

      <div id="CM">
        <b>Core Modules</b>
        {{CompletedCore}}
      </div>
      <div id="PE">
        <b>Programme Electives</b>
      </div>
      <div id="UE">
        <b>Unrestricted Electives</b>
      </div>
      <div id="GE">
        <b>General Electives</b>
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      CompletedCore: [],
      Module: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#CM, #PE, #UE, #GE {
  border-radius: 15px;
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  margin: 0; 
  width: 24.5%;
  height: 180px;
  overflow: auto;
  border-collapse: separate;
  border-spacing: 10px;
} 
#CM {
  background: #fbefcc;
}
#PE {
  background: #f9ccac;
}
#UE {
  background: #f4a688;
}
#GE {
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