<template>
  <div id="app2">
    <Progress strokeColor="#f9ccac" :transitionDuration="1000" :radius="70" :strokeWidth="15" value="50.00">
      <template v-slot:footer>
        <b>Programme Electives</b>
      </template>
    </Progress>
    </div>
</template>

<script>
import Progress from "./index.vue";

export default {
  name: "app2",
  components: {
    Progress
  }
};
</script>

<style lang="scss">
#app2 {
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
