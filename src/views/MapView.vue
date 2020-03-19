<template>
    <div>
    <v-container>
      <v-layout row>
        <v-flex md3>
          <ForcesList />
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
    components: {Map, ForcesList}
}
</script>

<style>

</style>