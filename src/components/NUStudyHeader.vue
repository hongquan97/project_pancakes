<template>
  <div>
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
div {
  background-color: #FAEBCC;
}
</style>