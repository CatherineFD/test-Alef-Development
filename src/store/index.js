import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: '',
      age: 0
    },
    children: []
  },
  getters: {
    getUser() {
      return this.state.user;
    },
    getChildren() {
      return this.state.children;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setChildren(state, children) {
      state.children = children;
    },
    addChildren(state, child) {
      state.children.push(child);
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    setChildren({ commit }, children) {
      commit('setChildren', children);
    },
    addChildren({ commit }, child) {
      commit('addChildren', child);
    }
  },
  modules: {
  }
})
