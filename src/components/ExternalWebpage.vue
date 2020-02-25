<template>
<div>
    <h1>Core Modules</h1>

    <div>        
        <table>
            <tr>
                <th>Module Code</th>
                <th>Module Title</th>
                <th>MCs</th>
            </tr>
    
            <tr v-for="mod in courseList" :key="mod.modCode">
                <td>{{mod.modCode}}</td>
                <td>{{mod.modTitle}}</td>
                <td>{{mod.MCs}}</td>
            </tr>
        </table>

    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    completed: ["CS1010S", "BT1101", "MA1521", "MA1101R"],
    courseList: [
    {
      modCode: "BT1101",
      modTitle: "Introduction to Business Analytics",
      MCs: 4
    },
    {
      modCode: "CS1010S",
      modTitle: "Programming Methodology",
      MCs: 4
    },
    {
      modCode: "EC1301",
      modTitle: "Principles of Economics",
      MCs: 4
    },
    {
      modCode: "IS1103",
      modTitle: "Ethics in Computing",
      MCs: 4
    },
    {
      modCode: "MA1101R",
      modTitle: "Linear Algebra 1",
      MCs: 4
    },
    {
      modCode: "MA1521",
      modTitle: "Calculus for Computing",
      MCs: 4
    },
    {
      modCode: "MKT1705X",
      modTitle: "Principles of Marketing",
      MCs: 4
    },
    {
      modCode: "BT2101",
      modTitle: "Decision Making Methods and Tools",
      MCs: 4
    },
    {
      modCode: "BT2102",
      modTitle: "Data Management and Visualisation",
      MCs: 4
    },
    {
      modCode: "CS2030",
      modTitle: "Programming Methodology 1",
      MCs: 4
    },
    {
      modCode: "CS2040",
      modTitle: "Data Structures and Algorithms",
      MCs: 4
    },
    {
      modCode: "IS2101",
      modTitle: "Business and Technical Communication",
      MCs: 4
    },
    {
      modCode: "ST2334",
      modTitle: "Probability and Statistics",
      MCs: 4
    },
    {
      modCode: "BT3102",
      modTitle: "Computational Methods for Business Analytics",
      MCs: 4
    },
    {
      modCode: "BT3103",
      modTitle: "Application Systems Development for Business Analytics",
      MCs: 4
    },
    {
      modCode: "IS3103",
      modTitle: "Information Systems Leadership and Communication",
      MCs: 4
    },
    {
      modCode: "BT4103",
      modTitle: "Business Analytics Capstone Project",
      MCs: 8
    },
    {
      modCode: "IS4010",
      modTitle: "Industry Internship Programme",
      MCs: 12
    },
    {
      modCode: "BT4101",
      modTitle: "B.Sc. Dissertation",
      MCs: 12
    }]
    }
  },
  methods:{
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 40%;
}

th {
  background: #F7DCAC;
}

th, td {
  border: 1px solid lightgrey;
  text-align: left;
  padding: 5px;
}

tr:nth-child(even) {
  opacity: 0.5;
}

tr:hover {
  background-color: #dddddd;
}
</style>