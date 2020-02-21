<template>
  <div>
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
    <font>You have selected: </font><b><i>{{major}}</i></b>
  </div>
</template>

<script>
export default {
  data() {
    return {
      major: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  color: orange;
  font: 12px/30px Georgia, serif;
  font-size: 18px;
}
optgroup {
  background-color: black;
  color: orange;
}
</style>