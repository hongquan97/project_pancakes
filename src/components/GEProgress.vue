<template>
  <div>
    <Progress strokeColor="#e0876a" :transitionDuration="1000" :radius="70" :strokeWidth="15" :value="this.ge_len">
      <template v-slot:footer>
        <p>General Electives</p>
      </template>
    </Progress>
  </div>
</template>

<script>
import Progress from "./index.vue";
export default {
  components: {
    Progress
  },
  props: {
    ge_len: Number
  }
};
</script>

<style lang="scss">
#Progress {
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
p {
  margin-top: 0em;
  font-weight: 600;
}
</style>
