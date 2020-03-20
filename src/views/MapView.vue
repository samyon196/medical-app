<template>
    <div>
    <v-container>
      <v-layout row>
        <v-flex md2>
          <h2 style="margin-right:30px" dir="rtl">כוחות</h2>
          <ForcesList :forces="forcesInVicinity" @force-clicked="forceClicked" />
        </v-flex>
        <v-flex md2>
          <h2 style="margin-right:30px" dir="rtl">אירועים</h2>
          <EventsList :events="eventsInVicinity" @event-clicked="eventClicked" />
        </v-flex>
        <v-flex md8>
            <h2 style="margin-right:30px" dir="rtl">מפה</h2>
            <Map :events-flipper="eventsFlipper" :current-events-popup="eventsId" :hotspots="this.hotspots" :forces-flipper="forcesFlipper" :current-forces-popup="forcesId" :forces="this.forces" :events="this.events" @boundsUpdated="boundsUpdated" />

        </v-flex>
      </v-layout> 
    </v-container>
    </div>
</template>

<script>
import Map from './../components/Map'
import ForcesList from './../components/ForcesList'
import EventsList from './../components/EventsList'
export default {
  components: {Map, ForcesList, EventsList},
  data: function() {
    return {
      forcesFlipper: true,
      eventsFlipper: true,
      forcesId: 0,
      eventsId: 0,
      bounds: {_southWest: { "lat": 29.420468051108937, "lng": 30.245324243473096}, _northEast: { "lat": 33.678647217642336, "lng": 40.0121699465981}},
    }
  },
  methods: {
    forceClicked(id) {
      //this.$store.getters.getForces
      console.log('Force with id ' + id + ' was clicked');
      this.forcesFlipper = !this.forcesFlipper;
      this.forcesId = id;
    },
    eventClicked(id) {
      //this.$store.getters.getForces
      console.log('Force with id ' + id + ' was clicked');
      this.eventsFlipper = !this.eventsFlipper;
      this.eventsId = id;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  },
  computed: {
    forces() {return this.$store.getters.getForces;},
    sortedForces() {return this.$store.getters.getSortedForces;},
    events() {return this.$store.getters.getEvents;},
    hotspots() {return this.$store.getters.getHotspots;},
    sortedEvents() {return this.$store.getters.getSortedEvents;},
    forcesInVicinity() {
      return this.sortedForces.filter(force => (force.lat >= this.bounds._southWest.lat 
                          && force.lat <= this.bounds._northEast.lat
                          && force.long >= this.bounds._southWest.lng
                          && force.long <= this.bounds._northEast.lng));
      },
    eventsInVicinity() {
      return this.sortedEvents.filter(event => (event.lat >= this.bounds._southWest.lat 
                          && event.lat <= this.bounds._northEast.lat
                          && event.long >= this.bounds._southWest.lng
                          && event.long <= this.bounds._northEast.lng));
      }
  }
}
</script>

<style>

</style>