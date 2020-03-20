<template>
  <div class="logoImage">
    <img v-bind:src="image" height="150px" width="280px"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: './assets/nustudy.JPG'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1 {
  text-align: center;
  font-family: Helvetica, sans-serif;
  color:orange;
  font-size: 4rem;
  font-weight: normal;
  margin: 0px;
}*/
div {
  background-color: #FAEBCC;
}
</style>