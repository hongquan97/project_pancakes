import Vue from 'vue';
import Router from 'vue-router';
import CM from "./CM";
import App from "./App";

Vue.use(Router);

export default new Router({
	routes: [
		{path: '/', name: 'App', component: App},
		{path: '/CM', name: 'CM', component: CM}
	]
});

