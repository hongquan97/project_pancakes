<template>
  <div>
    <header>
      <h1>{{title}}</h1>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'NUStudy'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  theme-color: #ffffff;
  background-color: #ffffff;
}
h1 {
  font-size: 50px;
  color: darkorange;
  text-align: center;
}
</style>