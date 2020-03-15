<template>
  <div id="app4">
    <Progress strokeColor="#e0876a" :transitionDuration="1000" :radius="70" :strokeWidth="15" :value="this.ge_len">
      <template v-slot:footer>
        <b>General Electives</b>
      </template>
    </Progress>
  </div>
</template>

<script>
import Progress from "./index.vue";

export default {
  name: "app4",
  components: {
    Progress
  },
  props: {
    ge_len: Number
  }
};
</script>

<style lang="scss">
#app4 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 10vh;
  color: #000000;
  background:#ffffff;
  justify-content: center;
  align-items: center;
}
body {
  margin: 0;
  padding: 0;
}
</style>
