import Vue from "vue";
import Vuex from "vuex";
import DataAction from './DataAction'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShow: false,
    dataAction: new DataAction()
  },

  actions: {},

  mutations: {},

  modules: {},
});
