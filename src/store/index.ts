import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import routes from './modules/routes'
import getters from './getters'
import { AppState } from './modules/app'
import { RouteState } from './modules/routes'

export interface State {
  app: AppState
  menus: RouteState
}

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    app: app,
    menus: routes
  },
  getters
})
export default store
