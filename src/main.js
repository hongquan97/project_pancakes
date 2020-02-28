import Vue from 'vue'
import router from './router'
import App from './App.vue'
//import store from './store'

Vue.config.productionTip = false
//sync(store, router)

new Vue({
  router,
  render: h => h(App)  
}).$mount('#app')
