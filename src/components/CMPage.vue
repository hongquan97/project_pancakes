<template>
<<<<<<< Updated upstream
  <div id="cm">
    <ExternalWebpage_Core></ExternalWebpage_Core>
=======
  <div>
    <h2>Core Modules</h2>

    <div>        
      <table>
        <tr>
          <th>Module Code</th>
          <th>Module Title</th>
          <th>MCs</th>
        </tr>

        <tr v-for="mod in courseList" :key="mod.modCode" 
        v-bind:style="CompletedCore.includes(mod.modCode) ? 'opacity:0.5;': 'opacity:1;'">
          <td>{{mod.modCode}}</td>
          <td>{{mod.modTitle}}</td>
          <td>{{mod.MCs}}</td>
        </tr>
      </table>
    </div>

    <p>
      <router-link :to="{name:'Home'}">Back</router-link>
    </p>
>>>>>>> Stashed changes
  </div>
</template>

<script>
import ExternalWebpage_Core from './ExternalWebpage_Core.vue'
export default {
  name: 'CM',
  components: {
    ExternalWebpage_Core,
  }
}
</script>

<style scoped>
</style>