<template>
  <div id="app">
    <app-title></app-title>
    <cse-sel></cse-sel>
    <cmpl-box></cmpl-box>
    <CMProgressBar></CMProgressBar>
    <Logo></Logo>
  </div>
</template>

<script>
import Title from './components/Title.vue'
import CourseSelection from './components/CourseSelection.vue'
import CompletedBox from './components/CompletedBox.vue'
import CMProgressBar from './components/CM_Progress.vue'
export default {
  name: 'App',
  components: {
    'app-title': Title,
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
  margin-top: 60px;
}
</style>
