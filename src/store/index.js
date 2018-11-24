import Vue from 'vue'
import Vuex from 'vuex'
import app from './app.store'

Vue.use(Vuex)

const store = new Vuex.Store({
  debug: false,
  modules: {
    app
  }
})

export default store
