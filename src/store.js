import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    displayName: null
  },
  mutations: {
    updateUser (state, { user }) {
      Vue.set(state, 'user', user)
    },
    updateDisplayName (state, displayName) {
      Vue.set(state, 'displayName', displayName);
      console.log("Setting display name to value " + displayName);
    }
  },
  actions: {

  }
})