import { createStore } from 'vuex'

const user = {name: 'Петя', age: 70}

const children = [{id: 1, name: 'Коля', age: 10}, {id:2, name: 'Вася', age: 5}]

export default createStore({
  state: {
    user: user,
    children: children || [],
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
