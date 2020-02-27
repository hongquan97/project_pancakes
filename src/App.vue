<template>
  <div id="app">
    <NUStudyHeader></NUStudyHeader>
    <cse-sel></cse-sel>
    <!--<ProgressCharts></ProgressCharts>-->
    <Logo></Logo>
    
  </div>
  
</template>

<script>
import NUStudyHeader from './components/NUStudyHeader.vue'
import CourseSelection from './components/CourseSelection.vue'
//import ProgressCharts from './components/ProgressCharts.vue'
import Logo from './components/Logo.vue'
export default {
  name: 'App',
  components: {
    NUStudyHeader,
    'cse-sel': CourseSelection,
    //ProgressCharts,
    Logo
  },

  data() {
    return {
      newTask: '',
     
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.mods.push({
          title: this.newTask,
          completed: false
        });
        this.newTask = '';
      }
    },
    completeTask(task) {
      task.completed = ! task.completed;
    },
    removeTask(index) {
      this.mods.splice(index, 1);
    },

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
#mods {
  width: 100%;
  max-width: 45rem;
  padding: 1em;
  margin: 1em auto;
  overflow: auto;
  background-color: white;
  box-shadow: 0px .25rem 1rem rgba(black, .25);
}
#tasks__item {
  margin-bottom : .5em;
  position: relative;
}
#tasks__item__remove {
  position: absolute;
  height: 100%;
  top: 50%;
  right: 0;
  transform: translateY(-50%)
}
</style>