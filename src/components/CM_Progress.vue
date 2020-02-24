<template>
  <div id="app" class = "container">
    <Progress strokeColor="#fbefcc" :transitionDuration="1000" :radius="70" :strokeWidth="15" value="70.00">
      <template v-slot:footer>
        <b>Core Module</b>
      </template>
    </Progress>
    
    <Progress strokeColor="#f9ccac" :transitionDuration="1000" :radius="70" :strokeWidth="15" value="50.00">
      <template v-slot:footer>
        <b>Programme Electives</b>
      </template>
    </Progress>

    <Progress strokeColor="#f4a688" :transitionDuration="1000" :radius="70" :strokeWidth="15" value="60.00">
      <template v-slot:footer>
        <b>Unrestricted Electives</b>
      </template>
    </Progress>

    <Progress strokeColor="#e0876a" :transitionDuration="1000" :radius="70" :strokeWidth="15" value="80.00">
      <template v-slot:footer>
        <b>General Electives</b>
      </template>
    </Progress>

  </div>
</template>

<script>
import Progress from "./index.vue";

export default {
  name: "app",
  components: {
    Progress
  }
};
</script>

<style lang="scss">
#app {
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
.container > div {
    display: inline-block;
    display: -moz-inline-box;
    *display: inline; /* For IE7 */
    zoom: 1; /* Trigger hasLayout */
    width: 25%;
    text-align: center;
}
</style>
