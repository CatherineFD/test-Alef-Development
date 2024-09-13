import { createStore } from 'vuex'

const user = {name: 'Петя', age: 70}

const children = [{id: 1, name: 'Коля', age: 10}, {id:2, name: 'Вася', age: 5}]

export default createStore({
  state: {
    user: user,
    children: children || []
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getChildren(state) {
      return state.children;
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
    updateAllData({ commit }, {user, children}) {
      commit('setUser', user);
      commit('setChildren', children);
    },
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
