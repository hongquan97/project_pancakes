<template>
<div>
    <h1>Programme Electives</h1>

    <div>  ListA      
        <table>
            <tr>
                <th>Module Code</th>
                <th>Module Title</th>
                <th>MCs</th>
            </tr>
    
            <tr v-for="mod in listA" :key="mod.modCode" v-bind:style="mod.Completed? 'opacity:0.5;': 'opacity:1;'">
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
  props:{
    PeM:{
      type: String
    }
  },
  data() {
    return {  
    CompletedPe:[],  
    listA: [
    {
 
      modCode: "DBA3712",
      modTitle: "Dynamic Pricing and Revenue Management",
      MCs: 4,
      Completed: false,
      Specialisation: "None"
    },
    {
      modCode: "IE3120",
      modTitle: "Manufacturing Logistics",
      MCs: 4,
      Completed: false,
      Specialisation: "None"
    },
    {
      modCode: "IS3240",
      modTitle: "Digital Platform Strategy and Architecture",
      MCs: 4,
      Completed: false,
      Specialisation: "Marketing"
    },
    {
      modCode: "BT4013",
      modTitle: "Analytics for Capital Market Trading and Investment",
      MCs: 4,
      Completed: false,
      Specialisation: "Financial"
    },
    {
      modCode: "BT4016",
      modTitle: "Risk Analytics for Financial Services",
      MCs: 4,
      Completed: false,
      Specialisation: "Financial"
    },
    {
      modCode: "BT4211",
      modTitle: "Data-Driven Marketing",
      MCs: 4,
      Completed: false,
      Specialisation: "Marketing"
    },
    {
      modCode: "DBA4811",
      modTitle: "Analytical Tools for Consulting",
      MCs: 4,
      Completed: false,
      Specialisation: "None"
    },
    {
      modCode: "BT4212",
      modTitle: "Search Engine Optimisation and Analytics",
      MCs: 4,
      Completed: false,
      Specialisation: "Marketing"
    },
    {
      modCode: "IS4241",
      modTitle: "Social Media Network Analysis",
      MCs: 4,
      Completed: false,
      Specialisation: "Marketing"
    },
    {
      modCode: "IS4250",
      modTitle: "IT-enabled Healthcare Solutioning",
      MCs: 4,
      Completed: false,
      Specialisation: "None"
    },
    {
      modCode: "MKT4418",
      modTitle: "Marketing Analytics",
      MCs: 4,
      Completed: false,
      Specialisation: "None"
    }]
    }
  },

  methods:{
  },
  
  watch:{
    PeModule: function(){
      if(this.CompletedPe.indexOf(this.PeM) == -1){
        this.CompletedPe.push(this.PeM);
        var list = this.listA;
        for(let i = 0; i<list.length; i++){
          if(list[i].modCode==this.PeM){
            list[i].Completed=true;
            break;
          }
        }
      }
    }

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

/* tr:nth-child(even) {
  opacity: 0.5;
} */

tr:hover {
  background-color: #dddddd;
}
</style>