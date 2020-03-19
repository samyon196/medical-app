<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Report a new event</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Report</v-card-subtitle>

    <v-card-text class="text--primary">
      <v-text-field required label="Name" v-model="name" ></v-text-field>
      <v-text-field required label="Detailed description" v-model="description"></v-text-field>
      <v-text-field required label="Latitude" v-model="lat"></v-text-field>
      <v-text-field required label="Longitude" v-model="lon"></v-text-field>
      <br />
      <v-slider
        label="Number of participants"
          min="1"
          max="50"
          v-model="slider"
          thumb-label="always"
        ></v-slider>
      <v-select
          :items="items"
          label="Standard"
          v-model="eventType"
        ></v-select>
    </v-card-text>

    <v-card-actions>
      <v-btn color="green" @click="sendReport">
        Send report
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            items: [
                'פיגוע דקירה',
                'תאונת דרכים',
                'שריפה',
                'פיגוע ירי'
            ],
            eventType: '',
            lat: '',
            lon: '',
            name: '',
            description: '',
            slider: 0
        }
    },
    methods: {
        sendReport() {
            //this.$socket.emit('channelName', payload);
            console.log([this.eventType, this.name, this.description, this.lat, this.lon, this.vslider])
        }
    }
}
</script>

<style>

</style>