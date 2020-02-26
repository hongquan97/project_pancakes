<template>
  <component :is="routedComponent"></component>
</template>

<script>
import App from "./App.vue";
import ExternalWebpage_Core from "./ExternalWebpage_Core.vue";

const routes = {
  "/": App,
  "/completed": ExternalWebpage_Core
};

export default {
  data() {
    return { current: window.location.pathname };
  },
  computed: {
    routedComponent() {
      return routes[this.current];
    }
  }
};
</script>