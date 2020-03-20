<template>
  <div class="logoImage">
    <img v-bind:src="image"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: './assets/nustudy-250x120.png'
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
  height="230px" width="230px"
}*/
div {
  background-color: #FAEBCC;
}
</style>