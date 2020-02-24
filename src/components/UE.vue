<template>
<div id="UE">
    <b>Unrestricted Electives</b>
</div>
</template>

<style scoped>
#UE {
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  border: 2px solid black; 
  width: 25%;
  height: 180px;
  overflow: auto;
  background: #f4a688;
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