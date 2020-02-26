<template>
  <div id="app3">
    <Progress strokeColor="#f4a688" :transitionDuration="1000" :radius="70" :strokeWidth="15" value="60.00">
      <template v-slot:footer>
        <b>Unrestricted Electives</b>
      </template>
    </Progress>
  </div>
</template>

<script>
import Progress from "./index.vue";

export default {
  name: "app3",
  components: {
    Progress
  }
};
</script>

<style lang="scss">
#app3 {
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
