import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forces: [
                  {name:'אמבולנס 879', type:'מד"א', event:"תאונת דרכים צומת תפוח"},
                  {name:'פלוגת הראל', type:'669'},
                  {name:'גדוד 33', type:'תאג"ד', event:"שריפה בארמון הנציב"},
                  {name:'גדוד 30', type:'תאג"ד'},
                  {name:'מ"פ גולן', type:'מג"ב'}
              ],
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
  getters: {
    getForces(state) {
      return state.forces;
    },
    getSortedForces(state) {
      function compare(a, b) {
        if (a.event && !b.event)
            return 1;
        if (b.event && !a.event)
            return -1;
        return 0;
        }

        return state.forces.concat().sort(compare);
    },
    getEvents(state) {
      return state.events;
    },
    getHotspots(state) {
      return state.hotspots;
    },
  },
  modules: {
  }
})
