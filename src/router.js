import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import CMPage from './components/CMPage';
import PEPage from './components/PEPage';
import NotFound from './components/NotFound';

Vue.use(Router);

export default new Router({
	mode: 'history',
  routes: [
		{ path: '/', name: 'Home', component: Home },
		{ path: '/CM', name: 'CMPage', component: CMPage },
		{ path: '/PE', name: 'PEPage', component: PEPage },
		{ path: '*', component: NotFound }
  ]
})

