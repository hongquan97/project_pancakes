<template>
  <div id="app">
    <NUStudyHeader></NUStudyHeader>
    <cse-sel></cse-sel>
    <cmpl-box></cmpl-box>
<<<<<<< HEAD
    <app-footer></app-footer>
=======
    <Logo></Logo>
>>>>>>> 7909c9485a8952f4bf36f5f3cce7b44f9ff2d959
  </div>
</template>

<script>
import NUStudyHeader from './components/NUStudyHeader.vue'
import Logo from './components/Logo.vue'
import CourseSelection from './components/CourseSelection.vue'
import CompletedBox from './components/CompletedBox.vue'
<<<<<<< HEAD
import Footer from './components/Footer.vue'
=======
import CMProgressBar from './components/CM_Progress.vue'
>>>>>>> 7909c9485a8952f4bf36f5f3cce7b44f9ff2d959
export default {
  name: 'App',
  components: {
    NUStudyHeader,
    Logo,
    'cse-sel': CourseSelection,
    'cmpl-box': CompletedBox,
<<<<<<< HEAD
    'app-footer': Footer
=======
    CMProgressBar
>>>>>>> 7909c9485a8952f4bf36f5f3cce7b44f9ff2d959
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