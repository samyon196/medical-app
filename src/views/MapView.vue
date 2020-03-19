<template>
    <div>
    id is {{id}}, {{forces[id].name}}
    <v-container>
      <v-layout row>
        <v-flex md3>
          <ForcesList :forces="forcesInVicinity" @force-clicked="forceClicked" />
        </v-flex>
        <v-flex md9>
            <Map :forces="this.forces" :events="this.events" @boundsUpdated="boundsUpdated" />
        </v-flex>
      </v-layout> 
    </v-container>
    </div>
</template>

<script>
import Map from './../components/Map'
import ForcesList from './../components/ForcesList'
export default {
  components: {Map, ForcesList},
  data: function() {
    return {
      id: 0,
      forces: this.$store.getters.getSortedForces,
      events: this.$store.getters.getEvents,
      bounds: {_southWest: { "lat": 29.420468051108937, "lng": 30.245324243473096}, _northEast: { "lat": 33.678647217642336, "lng": 40.0121699465981}},
    }
  },
  methods: {
    forceClicked(id) {
      //this.$store.getters.getForces
      console.log('Force with id ' + id + ' was clicked');
      this.id = id;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  },
  computed: {
    forcesInVicinity() {
      return this.forces.filter(force => (force.lat >= this.bounds._southWest.lat 
                          && force.lat <= this.bounds._northEast.lat
                          && force.long >= this.bounds._southWest.lng
                          && force.long <= this.bounds._northEast.lng));
      }
  }
}
</script>

<style>

</style>