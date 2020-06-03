import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import getters from "./getters";
import { AppState } from "./modules/app";

export interface State {
  app: AppState;
}

Vue.use(Vuex);
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    app: app
  },
  getters
});
export default store;
