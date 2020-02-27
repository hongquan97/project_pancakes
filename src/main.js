import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
//import {sync} from 'vuex-router-sync'

Vue.config.productionTip = false
//sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
