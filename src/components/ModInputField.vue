<template>
  <div>
    <p> Completed Module Code:
    <input type="text" maxlength="8" v-model="Input" v-on:keyup.enter="checkInput"/>
    </p>
  </div>
</template>

<script>
export default {
  props: ['modules'],
  data() {
    return {
      Input: ""
    }
  },
  methods: {
    checkInput: function() {
      this.Input = this.Input.toUpperCase().trim();
      if (this.Input == "") {
        alert("Enter something!");
      } else if (this.modules.indexOf(this.Input) != -1) {
        alert("Test Passed");
      } else {
        alert("Module List: " + this.modules.join(", "));
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>