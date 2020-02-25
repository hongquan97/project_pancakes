<template>
  <div id="app">
    <NUStudyHeader></NUStudyHeader>
    <cse-sel></cse-sel>
    <cmpl-box></cmpl-box>
    <Logo></Logo>
  </div>
</template>

<script>
import NUStudyHeader from './components/NUStudyHeader.vue'
import Logo from './components/Logo.vue'
import CourseSelection from './components/CourseSelection.vue'
import CompletedBox from './components/CompletedBox.vue'
import CMProgressBar from './components/CM_Progress.vue'
export default {
  name: 'App',
  components: {
    NUStudyHeader,
    Logo,
    'cse-sel': CourseSelection,
    'cmpl-box': CompletedBox,
   CMProgressBar
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