<template>
<div id="CM">
    <b>Core Modules</b>
    {{CompletedCore}}
</div>
</template>

<script>
export default {
  data() {
    return {
        Core: ["BT1101", "CS1010S", "EC1301", "IS1103", "MA1101R", "MA1521", "MA1102R", "MKT1705X", "BT2101",
        "BT2102", "CS2030", "CS2040", "IS2101", "ST2334", "BT3102", "BT3103", "IS3103", "BT4103", "IS4010",
        "BT4101"],
        completed_core: [],
        module: ""
    }
  }
}
</script>

<style scoped>
#CM{
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  border: 2px solid black; 
  width: 25%;
  height: 180px;
  overflow: auto;
  background: #fbefcc;
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