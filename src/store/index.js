import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: 'default',
  },
  mutations: {
    SET_THEME(state, name) {
      state.theme = name;
    },
  },
  actions: {
    setTheme({ commit }, name) {
      commit('SET_THEME', name);
    },
  },
  modules: {
  },
});
