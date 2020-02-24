<template>
      <div id="PE">
        <b>Programme Electives</b>
      </div>
</template>

<style scoped>
#PE {
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  border: 2px solid black; 
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
</style>