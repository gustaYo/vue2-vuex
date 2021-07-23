import Vue from "vue";
import Vuex from "vuex";

import { prop, add } from "ramda";

Vue.use(Vuex);

const dicsTimers = {};

export default new Vuex.Store({
  state: {
    times: {},
  },
  mutations: {
    changeTime(state, { id, time }) {
      Vue.set(state.times, id, time);
    },
    discount(state, { id, diff }) {
      state.times[id] = add(diff, state.times[id]);
    },
  },
  actions: {
    initTime({ commit }, parms) {
      const keyId = prop("id", parms);
      commit("changeTime", parms);
      clearInterval(dicsTimers[keyId]);
      dicsTimers[keyId] = setInterval(() => {
        commit("discount", { id: keyId, diff: -1 });
      }, 1000);
    },
  },
  modules: {},
});
