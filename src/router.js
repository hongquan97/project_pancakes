import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import CMPage from './components/CMPage';
import NotFound from './components/NotFound';
import store from './store'

Vue.use(Router);

export default new Router({
	mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/CM', name: 'CMPage', component: CMPage },
    { path: '/PE', name: 'PEPage', component: () => {
      switch (store.getters.getSpec[0]) {
       case "Business Analytics":
       return import('./components/PEPage');
       case "Business Analytics (Financial Analytics Specialisation)":
       return import ('./components/PEPage_FS');
       case "Business Analytics (Marketing Analytics Specialisation)":
       return import ('./components/PEPage_MS');
       default:
       return import('./components/PEPage');
      }
    }
  },

  { path: '*', component: NotFound }
  ]
})