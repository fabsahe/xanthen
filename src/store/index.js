import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    section: 0
  },
  getters: {
    section: (state) => state.section
  },
  mutations: {
    changeSection(state, newSection) {
      state.section = newSection
    }
  },
  actions: {},
  modules: {}
})
