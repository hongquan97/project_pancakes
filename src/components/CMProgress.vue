<template>
  <div>
    <Progress strokeColor="#fbefcc" :transitionDuration="1000" :radius="70" :strokeWidth="15" :value="this.cm_len">
      <template v-slot:footer>
        <nav>
          <router-link :to="{name:'CMPage'}"><p>Core Modules</p></router-link>
        </nav>
      </template>
    </Progress>
  </div>
</template>

<script>
import Progress from "./index.vue";
export default {
  components: {
    Progress,
  },
  props: {
    cm_len: Number
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
p {
  font-weight: 600;
}
a {
  color: #ff5138;
  text-decoration: underline;
  background-color: initial;
}
a:hover {
  color: #a30a0a;
}
</style>
