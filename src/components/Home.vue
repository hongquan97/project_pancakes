<template>
  <div id="app">
    <div>
      <CourseSelection></CourseSelection>
      <ProgressCharts></ProgressCharts>
    </div>
  </div>
  
</template>

<script>
import CourseSelection from './CourseSelection.vue'
import ProgressCharts from './ProgressCharts.vue'
export default {
  components: {
    CourseSelection,
    ProgressCharts,
  }
}
</script>

<style scoped>
</style>