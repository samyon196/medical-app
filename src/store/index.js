import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forces: [
                  {id: 1, lat: 31.924611, long: 34.897001, name:'אמבולנס 879', type:'מד"א', event:"תאונת דרכים צומת תפוח"},
                  {id: 2, lat: 31.224611, long: 35.924567, name:'פלוגת הראל', type:'669'},
                  {id: 3, lat: 31.424611, long: 35.124567, name:'גדוד 33', type:'תאג"ד', event:"שריפה בארמון הנציב"},
                  {id: 4, lat: 31.153093, long: 34.088673, name:'גדוד 30', type:'תאג"ד'},
                  {id: 5, lat: 31.524611, long: 34.597001, name:'מ"פ גולן', type:'מג"ב'},
                  {id: 6, lat: 31.524611, long: 35.324567, name:'גדוד 40', type:'תאג"ד'},
                  {id: 7, lat: 31.924611, long: 35.324567, name:'גדוד 50', type:'תאג"ד'},
                  {id: 8, lat: 31.253093, long: 34.788673, name:'גדוד 60', type:'תאג"ד'},
                  {id: 9, lat: 31.424611, long: 35.924567, name:'גדוד 70', type:'תאג"ד'},
                  {id: 10, lat: 31.624611, long: 34.897001, name:'גדוד 80', type:'תאג"ד'},
              ],
    events: [
      {id:1, timestamp:"10/3/20 22:10:43", name:"פיגוע בארמון הנציב", isOpen:true ,lat:31.654611 ,long:34.997001, type:'פיגוע דקירה', numOfParticipants:5, description:'וואי וואי איזה אירוע  '},    ],
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
