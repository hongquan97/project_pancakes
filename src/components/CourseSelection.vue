<template>
  <div>
    <br>
    <select required v-model="major">        
      <optgroup label="Degree Type">
        <option value="" disabled selected hidden>Please select your course of study</option>
        <option value="BA">Business Analytics</option>
        <option value="BA-FS">
        Business Analytics (Financial Analytics Specialisation)</option>
        <option value="BA-MS">
        Business Analytics (Marketing Analytics Specialisation)</option>
      </optgroup>
    </select>  
    {{addSpecialisation()}}  
    <br>
    <CompletedBox></CompletedBox>
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
      major: ""
    }
  },
  methods:{
    addSpecialisation: function() {
      this.$store.dispatch("addSpec", this.major);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  color: darkorange;
  font: 10px/30px Optima, sans-serif;
  font-size: 18px;
}
optgroup {
  background-color: white;
  color: orange;
}
</style>