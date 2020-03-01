import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],

	state: {
		CoreModules: [],
		listA: [],
		listB: [],
		listC: [],
		PE: [],
		specialisation: ""
	},

	mutations: {
		add(state, n) {
			if(!state.CoreModules.includes(n))
				state.CoreModules.push(n);
		},
		remove(state, n) {
			const index = state.CoreModules.indexOf(n);
			if (index > -1) {
				state.CoreModules.splice(index, 1);
			}
		},
		addSpecial(state,n){
			state.specialisation=n;
		},
		addtoA(state,n){
			if(!state.listA.includes(n))
				state.listA.push(n);
				state.PE.push(n);			
		},
		addtoB(state,n){
			if(!state.listB.includes(n))
				state.listB.push(n);	
				state.PE.push(n);		
		},
		addtoC(state,n){
			if(!state.listC.includes(n))
				state.listC.push(n);
				state.PE.push(n);			
		},
		removepe(state, n) {
			const index = state.PE.indexOf(n);
			if (index > -1) {
				state.PE.splice(index, 1);
			}
			var i = 0;
			if(state.listA.includes(n)){	
				i = state.listA.indexOf(n);			
				state.listA.splice(i, 1);
			}
			if(state.listB.includes(n)){
				
				i = state.listB.indexOf(n);	
				state.listB.splice(i, 1);
			}
			if(state.listC.includes(n)){
				i = state.listC.indexOf(n);	
				state.listC.splice(i, 1);
			}
		}
	},


	getters: {
		getModules(state) {
			return state.CoreModules;
		},
		getSpec(state){
			return state.specialisation;
		},
		getlistA(state){
			return state.listA;
		},
		getlistB(state){
			return state.listB;
		},
		getlistC(state){
			return state.listC;
		},
		getPE(state){
			return state.PE;
		}
	},

	actions: {
		addModule({commit}, n) {
			commit("add", n);
		},
		removeModule({commit}, n) {
			commit("remove", n);
		},
		addSpec({commit}, n) {
			commit("addSpecial", n);
		},
		addA({commit}, n) {
			commit("addtoA", n);
		},
		addB({commit}, n) {
			commit("addtoB", n);
		},
		addC({commit}, n) {
			commit("addtoC", n);
		},
		removePE({commit}, n) {
			commit("removepe", n);
		},
	}
});