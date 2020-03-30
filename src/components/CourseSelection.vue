<template>
  <div>
    <br>
    <select required v-model="major" @change="addSpecialisation($event)" >        
      <optgroup label="Degree Type">
        <option value="" disabled selected hidden>Please select your course of study</option>
        <option value="Business Analytics">Business Analytics</option>
        <option value="Business Analytics (Financial Analytics Specialisation)">
        Business Analytics (Financial Analytics Specialisation)</option>
        <option value="Business Analytics (Marketing Analytics Specialisation)">
        Business Analytics (Marketing Analytics Specialisation)</option>
      </optgroup>
    </select>
    <br>  <div v-for="s in spec" v-bind:key="s">
      <b>{{s}}</b>  
      <span v-on:click="remove(s)" id="button"> x </span> 
    </div>
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
      major: "",
      spec: this.$store.getters.getSpec
    }
  },
  methods:{
    addSpecialisation: function() {
      if (!this.$store.state.selected){
        this.$store.dispatch("addSpec", this.major);
         window.location.reload()
      }
    },
      remove(x) {
      this.$store.dispatch("removeSpec", x);

    }
   
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  font-family: -apple- system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, 
  Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  color: darkorange;
  font: 10px/30px;
  font-size: 18px;
  border-radius: 6px;
}
select:focus {
  outline: none;
  box-shadow: 0 0 3pt 3pt #FAEBCC;
}
option:checked { 
  background-color: #FAEBCC; 
}
optgroup {
  font-family: -apple- system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, 
  Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  background-color: white;
  color: orange;
}
#button {
  font-size: 20px;
  font-weight: 600;
  color: red;
  opacity: 0.4;
  cursor: pointer;
}
#button:hover {
  opacity: 1;
}
</style>