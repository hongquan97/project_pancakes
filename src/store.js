import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],

	state: {
		listOfModules: [],
		CoreModules: [],
		listA: [],
		listB: [],
		listC: [],
		FSCom: [],
		FSElect: [],
		MSCom: [],
		MSElect: [],
		PE: [],
		GE: [],
		UE: [],
		specialisation: "",
		selected: false,
	},

	mutations: {
		addCore(state, n) {
			if(!state.CoreModules.includes(n))
				state.CoreModules.push(n);
		},
		removeCore(state, n) {
			const index = state.CoreModules.indexOf(n);
			if (index > -1) {
				state.CoreModules.splice(index, 1);
			}
		},
		addSpecial(state,n) {
			state.specialisation = n;
			state.selected = true;
		},
		addToA(state,n) {
			if (!state.listA.includes(n)) {
				state.listA.push(n);
				if (!state.PE.includes(n)) {
					state.PE.push(n);	
				}
			}	
		},
		addToB(state,n) {
			if (!state.listB.includes(n)) {
				state.listB.push(n);
				if (!state.PE.includes(n)) {
					state.PE.push(n);	
				}
			}	
		},
		addToC(state,n) {
			if (!state.listC.includes(n)) {
				state.listC.push(n);
				if (!state.PE.includes(n)) {
					state.PE.push(n);	
				}
			}	
		},
		addToFSCom(state,n) {
			if (!state.FSCom.includes(n)) {
				state.FSCom.push(n);
				if (!state.PE.includes(n)) {
					state.PE.push(n);	
				}
			}	
		},
		addToFSElect(state,n) {
			if (!state.FSElect.includes(n)) {
				state.FSElect.push(n);
				if (!state.PE.includes(n)) {
					state.PE.push(n);	
				}
			}	
		},
		addToMSCom(state,n) {
			if (!state.MSCom.includes(n)) {
				state.MSCom.push(n);
				if (!state.PE.includes(n)) {
					state.PE.push(n);	
				}
			}	
		},
		addToMSElect(state,n) {
			if (!state.MSElect.includes(n)) {
				state.MSElect.push(n);
				if (!state.PE.includes(n)) {
					state.PE.push(n);	
				}
			}	
		},
		addToGE(state,n) {
			if(!state.GE.includes(n))
				state.GE.push(n);			
		},
		removeFromGE(state, n) {
			const index = state.GE.indexOf(n);
			if (index > -1) {
				state.GE.splice(index, 1);
			}
		},
		addToUE(state,n) {
			if(!state.UE.includes(n))
				state.UE.push(n);			
		},
		removeFromUE(state, n) {
			const index = state.UE.indexOf(n);
			if (index > -1) {
				state.UE.splice(index, 1);
			}
		},
		removePE(state, n) {
			const index = state.PE.indexOf(n);
			if (index > -1) {
				state.PE.splice(index, 1);
			}

			var i = 0;

			if(state.listA.includes(n)) {	
				i = state.listA.indexOf(n);			
				state.listA.splice(i, 1);
			}
			if(state.listB.includes(n)) {

				i = state.listB.indexOf(n);	
				state.listB.splice(i, 1);
			}
			if(state.listC.includes(n)) {
				i = state.listC.indexOf(n);	
				state.listC.splice(i, 1);
			}
			if(state.FSCom.includes(n)) {
				i = state.FSCom.indexOf(n);	
				state.FSCom.splice(i, 1);
			}
			if(state.FSElect.includes(n)) {
				i = state.FSElect.indexOf(n);	
				state.FSElect.splice(i, 1);
			}
			if(state.MSCom.includes(n)) {
				i = state.MSCom.indexOf(n);	
				state.MSCom.splice(i, 1);
			}
			if(state.MSElect.includes(n)) {
				i = state.MSElect.indexOf(n);	
				state.MSElect.splice(i, 1);
			}
		},

		addToList(state, n) {
			if(!state.listOfModules.includes(n)) {
        state.listOfModules.push(n);
      }
    }
	},

	getters: {
		getModules(state) {
			return state.CoreModules;
		},
		getSpec(state) {
			return state.specialisation;
		},
		getListA(state) {
			return state.listA;
		},
		getListB(state) {
			return state.listB;
		},
		getListC(state) {
			return state.listC;
		},
		getFSCom(state) {
			return state.FSCom;
		},
		getFSElect(state) {
			return state.FSElect;
		},
		getMSCom(state) {
			return state.MSCom;
		},
		getMSElect(state) {
			return state.MSElect;
		},
		getPE(state) {
			return state.PE;
		},
		getGE(state) {
			return state.GE;
		},
		getUE(state) {
			return state.UE;
		},
		getList(state) { 
			return state.listOfModules;
		},
		getSelected(state) {
			return state.selected;
		}
	},

	actions: {
		addModule({commit}, n) {
			commit("addCore", n);
		},
		removeModule({commit}, n) {
			commit("removeCore", n);
		},
		addSpec({commit}, n) {
			commit("addSpecial", n);
		},
		addA({commit}, n) {
			commit("addToA", n);
		},
		addB({commit}, n) {
			commit("addToB", n);
		},
		addC({commit}, n) {
			commit("addToC", n);
		},
		addFSCom({commit}, n) {
			commit("addToFSCom", n);
		},
		addFSElect({commit}, n) {
			commit("addToFSElect", n);
		},
		addMSCom({commit}, n) {
			commit("addToMSCom", n);
		},
		addMSElect({commit}, n) {
			commit("addToMSElect", n);
		},
		removePE({commit}, n) {
			commit("removePE", n);
		},
		addGE({commit}, n) {
			commit("addToGE", n);
		},
		removeGE({commit}, n) {
			commit("removeFromGE", n);
		},
		addUE({commit}, n) {
			commit("addToUE", n);
		},
		removeUE({commit}, n) {
			commit("removeFromUE", n);
		},
		addList({commit}, n) {
			commit("addToList", n);
		}
	}
});