import Vue from 'vue'
import App from './App.vue'
import CM from './CM.vue'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App, CM),
  router
}).$mount('#app', '#cm')