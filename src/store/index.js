import Vuex from "vuex";
import Vue from 'vue'
Vue.use(Vuex)
import header_find from "./modules/header-find";
const store = new Vuex.Store({
  modules: {
    header_find
  }
});

export default store;
