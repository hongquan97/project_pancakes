<template>
  <div class="headerStyle">

    <header>
      <h1>{{header}}</h1>
    </header>

  </div>
</template>

<script>
export default {
  data() {
    return {
      header: 'NUStudy'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-size: 50px;
  color: darkorange;
  text-align: center;
}
</style>