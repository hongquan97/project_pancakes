import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.store({
    state:{
        CoreModule: ""
    },
    mutations:{
        update: (state, n) => {
            state.CoreModule = n;
          }
    },
    getters:{
        updated: state =>{
            return state.CoreModule;
        }
    },

    actions:{
        async createChange({ commit }, n) {
            commit("update", n);
          }
    }
});

export default store;
