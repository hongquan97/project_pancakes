<template>
  <div id="app">
    <NUStudyHeader></NUStudyHeader>
    <router-view></router-view>
    <Logo></Logo>
  </div>
  
</template>

<script>
import NUStudyHeader from './components/NUStudyHeader.vue'
import Logo from './components/Logo.vue'
export default {
  name: 'App',
  components: {
    NUStudyHeader,
    Logo
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