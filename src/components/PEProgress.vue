<template>
  <div id="app2">
    <Progress strokeColor="#f9ccac" :transitionDuration="1000" :radius="70" :strokeWidth="15" :value="this.pe_len">
      <template v-slot:footer>
        <nav>
          <a :href="$router.resolve(to='/PE').href"><b>Programme Electives</b></a>
        </nav>
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
    pe_len: Number
  }
};
</script>

<style lang="scss">
Progress {
  font-family: Helvetica, sans-serif;
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
