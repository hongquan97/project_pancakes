<template>
  <div>
    <h1>Progress Electives
    <br>Financial Analytics Specialisation</h1>
    <div>      
      <table class = "inline">
        <h3>Compulsory Modules (do all 3 modules)</h3>
        <tr>
          <th>Module Code</th>
          <th>Module Title</th>
          <th>MCs</th>
        </tr>

        <tr v-for="mod in FS_Compulsory" :key="mod.modCode" 
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

        <tr v-for="mod in FS_Elective" :key="mod.modCode" 
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
      FS_Compulsory: [
      {
        modCode: "BT4013",
        modTitle: "Analytics for Capital Market Trading and Investment",
        MCs: 4,
        Specialisation: "Financial"
      },
      {
        modCode: "BT4016",
        modTitle: "Risk Analytics for Financial Services",
        MCs: 4,
        Specialisation: "Financial"
      },
      {
        modCode: "IS4228",
        modTitle: "Information Technologies in Financial Services",
        MCs: 4,
        Specialisation: "Financial"
      }],

      FS_Elective: [
      {
        modCode: "BT4012",
        modTitle: "Fraud Analytics",
        MCs: 4,
        Specialisation: "Financial"
      },
      {
        modCode: "BT4221",
        modTitle: "Big Data Techniques and Technologies",
        MCs: 4,
        Specialisation: "Both"
      },
      {
        modCode: "BT4222",
        modTitle: "Mining Web Data for Business Insights",
        MCs: 4,
        Specialisation: "Both"
      },
      {
        modCode: "IS4302",
        modTitle: "Blockchain and Distributed Ledger Technologies",
        MCs: 4,
        Specialisation: "Financial"
      },
      { // IS4234 is not in any list on NUS website
        modCode: "IS4234",
        modTitle: "Compliance and Regulation Technology",
        MCs: 4,
        Specialisation: "Financial"
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