import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forces: [],
    events: [],
    hotspots: []
  },
  mutations: {
    SET_FORCES(state, forces) {
      state.forces = forces;
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_HOTSPOTS(state, hotspots) {
      state.hotspots = hotspots;
    }
  },
  actions: {
    updateForces(context, forces) {
      context.commit('SET_FORCES', forces);
    },
    updateEvents(context, events) {
      context.commit('SET_EVENTS', events);
    },
    updateHotspots(context, hotspots) {
      context.commit('SET_HOTSPOTS', hotspots);
    }
  },
  modules: {
  }
})
