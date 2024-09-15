import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    children:  [],
    isLoading: false,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getChildren(state) {
      return state.children;
    },
    getLoading(state) {
        return state.isLoading;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setChildren(state, children) {
      state.children = children;
    },
    setLoading(state, isLoading) {
        state.isLoading = isLoading;
    }
  },
  actions: {
    updateAllData({ commit }, {user, children}) {
      commit('setLoading', true);
      setTimeout(() => {
        commit('setUser', user);
        commit('setChildren', children);
        commit('setLoading', false);
      }, 3000);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    setChildren({ commit }, children) {
      commit('setChildren', children);
    },
  },
  modules: {
  }
})
