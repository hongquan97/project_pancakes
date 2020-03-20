<template>
  <div class="headerStyle">

    <footer>
      <p v-html="copyRtSymbol"></p>
    </footer>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyRtSymbol:'&copy; Pancakes'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  padding: 120px 0px 5px;
}
p {
  font-size: 15px;
  color: darkorange;
  text-align: center;
}
</style>