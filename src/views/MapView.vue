<template>
    <div>
    id is {{id}}, {{forces[id].name}}
    <v-container>
      <v-layout row>
        <v-flex md3>
          <ForcesList @force-clicked="forceClicked" />
        </v-flex>
        <v-flex md9>
            <Map />
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
      forces: this.$store.getters.getSortedForces
    }
  },
  methods: {
    forceClicked(id) {
      //this.$store.getters.getForces
      console.log('Force with id ' + id + ' was clicked');
      this.id = id;
    }
  },
}
</script>

<style>

</style>