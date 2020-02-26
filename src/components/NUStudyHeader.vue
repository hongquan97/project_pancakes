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
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Oswald:300,400,700');
h1 {
  text-align: center;
  font-family: "Oswald", sans;
  color:orange;
  font-size: 4rem;
  font-weight: normal;
  margin: 0px;
}

</style>