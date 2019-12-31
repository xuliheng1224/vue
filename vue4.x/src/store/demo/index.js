export default {
  namespaced: true,
  state: {
    wages: Number(sessionStorage.getItem('wages')) || 0
  },
  mutations: {
    add (state, data) {
      state.wages = data ? state.wages + Number(data) : 0;
      sessionStorage.setItem('wages', data ? state.wages : 0)
    }
  },
  actions: {
    add ({ commit }, data) {
      commit('add', data)
    }
  }
}
