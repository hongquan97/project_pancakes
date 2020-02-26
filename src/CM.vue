<template>
  <div id="cm">
    <NUStudyHeader></NUStudyHeader>
    <ExternalWebpage_Core></ExternalWebpage_Core>
    <Logo></Logo>
  </div>
</template>

<script>
import NUStudyHeader from './components/NUStudyHeader.vue'
import ExternalWebpage_Core from './components/ExternalWebpage_Core.vue'
import Logo from './components/Logo.vue'
export default {
  name: 'CM',
  components: {
    NUStudyHeader,
    ExternalWebpage_Core,
    Logo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>