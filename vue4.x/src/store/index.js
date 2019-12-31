import Vue from 'vue'
import Vuex from 'vuex'
import demo from './demo';

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : undefined
  },
  mutations: {
    userData (state, data) {
      sessionStorage.setItem('user', JSON.stringify(data))
      state.user = data
    }
  },
  actions: {
    userData ({ commit }, data) {
      commit('userData', data)
    }
  },
  modules: {
    demo
  }
})
