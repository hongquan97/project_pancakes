<template>
  <div>
    <h1>Progress Electives
    <br>Marketing Analytics Specialisation</h1>
    <div>      
      <table class = "inline">
        <h3>Compulsory Modules (do all 3 modules)</h3>
        <tr>
          <th>Module Code</th>
          <th>Module Title</th>
          <th>MCs</th>
        </tr>

        <tr v-for="mod in MS_Compulsory" :key="mod.modCode" 
         v-bind:style="PE.includes(mod.modCode) ? 'opacity:0.5;': 'opacity:1;'">
          <td>{{mod.modCode}}</td>
          <td>{{mod.modTitle}}</td>
          <td>{{mod.MCs}}</td>
        </tr>
      </table>
      
      <table class = "inline">
       <h3>Elective Modules (select any 3 modules)</h3>
        <tr>
          <th>Module Code</th>
          <th>Module Title</th>
          <th>MCs</th>
        </tr>

        <tr v-for="mod in MS_Elective" :key="mod.modCode" 
        v-bind:style="PE.includes(mod.modCode) ? 'opacity:0.5;': 'opacity:1;'">
          <td>{{mod.modCode}}</td>
          <td>{{mod.modTitle}}</td>
          <td>{{mod.MCs}}</td>
        </tr>
      </table>
  </div>
    <p>
      <router-link :to="{name:'Home'}">Back</router-link>
    </p>
  </div>
</template>

<script>
export default {
  props:{
    PeM:{
      type: String
    }
  },
  data() {
    return {  
      PE: this.$store.getters.getPE,
      MS_Compulsory: [
      {
        modCode: "BT4211",
        modTitle: "Data-Driven Marketing",
        MCs: 4,
        Specialisation: "Marketing"
      },
      {
        modCode: "BT4212",
        modTitle: "Search Engine Optimisation and Analytics",
        MCs: 4,
        Specialisation: "Marketing"
      },
      {
        modCode: "BT4222",
        modTitle: "Mining Web Data for Business Insights",
        MCs: 4,
        Specialisation: "Both"
      }],

      MS_Elective: [
      {
        modCode: "BT4014",
        modTitle: "Analytics Driven Design of Adaptive Systems",
        MCs: 4,
        Specialisation: "Marketing"
      },
      {
        modCode: "BT4015",
        modTitle: "Geospatial Analytics",
        MCs: 4,
        Specialisation: "Marketing"
      },
      {
        modCode: "BT4221",
        modTitle: "Big Data Techniques and Technologies",
        MCs: 4,
        Specialisation: "Both"
      },
      {
        modCode: "IS3240",
        modTitle: "Digital Platform Strategy and Architecture",
        MCs: 4,
        Specialisation: "Marketing"
      },
      {
        modCode: "IS4241",
        modTitle: "Social Media Network Analysis",
        MCs: 4,
        Specialisation: "Marketing"
      }]
    }
  }
}
</script>

<style scoped>
.inline {
  display: inline-block;
  padding: 5px;
}

table {
  border-collapse: collapse;
  width: 30%
  
  }

th {
  background: #FAEBCC;
}

th, td {
  border: 1px solid lightgrey;
  text-align: left;
  padding: 5px;
}
</style>