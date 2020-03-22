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
h1 {
  text-align: center;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  color:orange;
  font-size: 4rem;
  font-weight: normal;
  margin: 0px;
}

</style>