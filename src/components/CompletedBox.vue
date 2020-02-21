<template>
  <div>
    <p id="Completed">
      <h1>Completed Modules</h1>
      <br>
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
      <br><br>
      Enter Completed Module Code:
  </div>
</template>

<script>
export default {
  data() {
    return {
      completed_core: [],
      module: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#CM, #PE, #UE, #GE {
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  border: 2px solid black; 
  width: 25%;
  height: 180px;
  overflow: auto;
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