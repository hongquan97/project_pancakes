<template>
<<<<<<< Updated upstream
  <div id="pe">
    <ExternalWebpage_PE></ExternalWebpage_PE>
=======
  <div>
    <h2>Programme Electives</h2>
    <div>      
      <table class = "inline">
         <h3>List A</h3>
        <tr>
          <th>Module Code</th>
          <th>Module Title</th>
          <th>MCs</th>
        </tr>

        <tr v-for="mod in listA" :key="mod.modCode" 
         v-bind:style="CompletedA.includes(mod.modCode) ? 'opacity:0.5;': 'opacity:1;'">
          <td>{{mod.modCode}}</td>
          <td>{{mod.modTitle}}</td>
          <td>{{mod.MCs}}</td>
        </tr>
      </table><table class = "inline">
       <h3>List B</h3>
        <tr>
          <th>Module Code</th>
          <th>Module Title</th>
          <th>MCs</th>
        </tr>

        <tr v-for="mod in listB" :key="mod.modCode" 
        v-bind:style="CompletedB.includes(mod.modCode) ? 'opacity:0.5;': 'opacity:1;'">
          <td>{{mod.modCode}}</td>
          <td>{{mod.modTitle}}</td>
          <td>{{mod.MCs}}</td>
        </tr>
      </table><table class = "inline">
        <h3>List C</h3>
        <tr>
          <th>Module Code</th>
          <th>Module Title</th>
          <th>MCs</th>
        </tr>

        <tr v-for="mod in listC" :key="mod.modCode"
        v-bind:style="CompletedC.includes(mod.modCode) ? 'opacity:0.5;': 'opacity:1;'" >
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
import ExternalWebpage_PE from './ExternalWebpage_PE.vue'
export default {
  name: 'PE',
  components: {
    ExternalWebpage_PE,
  }
}
</script>

<style scoped>
</style>