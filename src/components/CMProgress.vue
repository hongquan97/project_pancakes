<template>
  <div id="app1">
    <Progress strokeColor="#fbefcc" :transitionDuration="1000" :radius="70" :strokeWidth="15" value="70.00">
      <template v-slot:footer>
        <b>Core Modules</b>
      </template>
    </Progress>
    </div>
</template>

<script>
import Progress from "./index.vue";

export default {
  name: "app1",
  components: {
    Progress
  }
};
</script>

<style lang="scss">
#app1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 10vh;
  color: #000000;
  background:#ffffff;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
body {
  margin: 0;
  padding: 0;
}
</style>
