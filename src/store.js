import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],

	state: {
		CoreModules: []
	},

	mutations: {
		add(state, n) {
			state.CoreModules.splice(-1, 0, n);
		},
		remove(state, n) {
			const index = state.CoreModules.indexOf(n);
			if (index > -1) {
				state.CoreModules.splice(index, 1);
			}
		}
	},

	getters: {
		getModules(state) {
			return state.CoreModules;
		}
	},

	actions: {
		addModule({commit}, n) {
			commit("add", n);
		},
		removeModule({commit}, n) {
			commit("remove", n);
		}
	}
});