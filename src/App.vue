<template>
  <div id="app">
    <NUStudyHeader></NUStudyHeader>
    <router-view></router-view>
    <Footer></Footer>
  </div>
  
</template>

<script>
import NUStudyHeader from './components/NUStudyHeader.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    NUStudyHeader,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>