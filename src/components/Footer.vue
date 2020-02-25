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
  padding: 10px;
  border-color: black;
  border-width: 2px;
}
p {
  align-content: center;
  color: ivory;
}
</style>