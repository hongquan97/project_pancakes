<template>
  <div>
    <br>
    <select required v-model="major">        
      <optgroup label="Degree Type">
        <option value="" disabled selected hidden>Please select your course of study</option>
        <option value="Business Analytics">Business Analytics</option>
        <option value="Business Analytics (Financial Analytics Specialisation)">
        Business Analytics (Financial Analytics Specialisation)</option>
        <option value="Business Analytics (Marketing Analytics Specialisation)">
        Business Analytics (Marketing Analytics Specialisation)</option>
      </optgroup>
    </select>    
    <br>
    <CompletedBox :Modules="Core"></CompletedBox>
  </div>
</template>

<script>
import CompletedBox from './CompletedBox.vue'
export default {
  components: {
    CompletedBox
  },
  data() {
    return {
      major: "",
      Core: ["CS1010S", "BT1101", "IS1103", "EC1301", "MA1101R", "MA1311", "MA1521", "MA1102R", "MKT1705X", "CS2030", "CS2040", 
    "BT2101", "BT2102", "IS2101", "ST2334", "BT3103", "BT3102", "IS3103", "BT4101", "BT4103", "IS4010"],
      PE: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  color: rgba(255, 115, 0, 0.849);
  font: 10px/30px Optima, sans-serif;
  font-size: 18px;
}
optgroup {
  background-color: white;
  color: orange;
}
</style>