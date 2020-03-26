<template>
  <div>
    <h1>Programme Electives</h1>
    <div>      
      <table class = "inline">
         <h3>List A</h3>
        <tr>
          <th>Module Code</th>
          <th>Module Title</th>
          <th>MCs</th>
        </tr>

        <tr v-for="mod in listA" :key="mod.modCode" 
         v-bind:style="PE.includes(mod.modCode) ? 'opacity:0.5;': 'opacity:1;'">
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
        v-bind:style="PE.includes(mod.modCode) ? 'opacity:0.5;': 'opacity:1;'">
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
        v-bind:style="PE.includes(mod.modCode) ? 'opacity:0.5;': 'opacity:1;'" >
          <td>{{mod.modCode}}</td>
          <td>{{mod.modTitle}}</td>
          <td>{{mod.MCs}}</td>
        </tr>
      </table>
  </div>
    <p>
      <br>
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
      listA: [
      {
        modCode: "DBA3712",
        modTitle: "Dynamic Pricing and Revenue Management",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "IE3120",
        modTitle: "Manufacturing Logistics",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "IS3240",
        modTitle: "Digital Platform Strategy and Architecture",
        MCs: 4,
        Specialisation: "Marketing"
      },
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
        modCode: "DBA4811",
        modTitle: "Analytical Tools for Consulting",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "IS4241",
        modTitle: "Social Media Network Analysis",
        MCs: 4,
        Specialisation: "Marketing"
      },
      {
        modCode: "IS4250",
        modTitle: "IT-enabled Healthcare Solutioning",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "MKT4418",
        modTitle: "Marketing Analytics",
        MCs: 4,
        Specialisation: "None"
      }],


      listB: [
      {
        modCode: "IE2110",
        modTitle: "Operations Research I",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "DBA3701",
        modTitle: "Introduction to Optimisation",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "CS3244",
        modTitle: "Machine Learning",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "DBA3803",
        modTitle: "Predictive Analytics in Business",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "BSE4711",
        modTitle: "Econometrics for Business II",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "BT4012",
        modTitle: "Fraud Analytics",
        MCs: 4,
        Specialisation: "Financial"
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
        modCode: "BT4222",
        modTitle: "Mining Web Data for Business Insights",
        MCs: 4,
        Specialisation: "Both"
      },
      {
        modCode: "BT4240",
        modTitle: "Machine Learning for Predictive Data Analytics",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "IS4241",
        modTitle: "Social Media Network Analysis",
        MCs: 4,
        Specialisation: "Marketing"
      },
      {
        modCode: "IE4210",
        modTitle: "Operations Research II",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "ST3131",
        modTitle: "Regression Analysis",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "ST4245",
        modTitle: "Statistical Methods for Finance",
        MCs: 4,
        Specialisation: "None"
      }],


      listC: [
      {
        modCode: "IS3221",
        modTitle: "ERP Systems with Analytics Solutions",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "IS3261",
        modTitle: "Mobile Solutions Design and Development",
        MCs: 4,
        Specialisation: "None"
      },
      {
        modCode: "BT4014",
        modTitle: "Analytics Driven Design of Adaptive Systems",
        MCs: 4,
        Specialisation: "Marketing"
      },
      {
        modCode: "IS4228",
        modTitle: "Information Technologies in Financial Services",
        MCs: 4,
        Specialisation: "Financial"
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