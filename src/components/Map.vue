<template>

  <div style="height: 350px;">
    <l-map
      ref="myMap"
      style="height: 130%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >

      <l-tile-layer :url="url"></l-tile-layer>
    <l-circle-marker v-for="(item, index) in events"
        ref="events"
        :key="index"
        :lat-lng="[item.lat, item.long]"
        :radius="2"
        color="red"
    >
    <l-popup :options="{ keepInView: false, autoPan: false }"><Event @delete-event="clearPopup(item.id)" v-bind:id="item.id" v-bind:name="item.name" v-bind:type="item.type" v-bind:timestamp="item.timestamp" v-bind:description="item.description" v-bind:num-of-participants="item.numOfParticipants" v-bind:handling-forces="item.handlingForces"/></l-popup>
    </l-circle-marker>
    
    <l-circle-marker v-for="(item, index) in hotspots" 
        :key="index+10000"
        :lat-lng="[item.lat, item.long]"
        :radius="item.radius"
        color="orange"
    />

    <l-circle-marker v-for="(item, index) in forces"
        ref="forces" 
        :key="index+20000"
        :lat-lng="[item.lat, item.long]"
        :radius="2"
        color="blue"
    >
    <l-popup :options="{ keepInView: false, autoPan: false }"><Force v-bind:name="item.name" v-bind:type="item.type" v-bind:event="item.event" /></l-popup>
    </l-circle-marker>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LCircle, LCircleMarker, LPopup} from 'vue2-leaflet';
import Force from './Force'
import Event from './Event'
export default {
  components: {
    LMap,
    LTileLayer,
    LCircle,
    LCircleMarker,
    LPopup,
    Force,
    Event
  },
  props: {
      events: Array, 
      forces: Array,
      hotspots: Array,
      currentForcesPopup: Number,
      currentEventsPopup: Number,
      forcesFlipper: Boolean,
      eventsFlipper: Boolean
  },
  watch: {
    forcesFlipper(newVal, oldVal) {
      console.log('Prop changed to ' + this.currentForcesPopup);
      let idx = this.forces.findIndex(force => force.id == this.currentForcesPopup);
      //this.$refs.forces[oldVal-1].mapObject.closePopup();
      this.center = [this.forces[idx].lat, this.forces[idx].long];
      this.$refs.forces[idx].mapObject.openPopup();
    },
    eventsFlipper(newVal, oldVal) {
      console.log('Prop changed to ' + this.currentEventsPopup);
      let idx = this.events.findIndex(event => event.id == this.currentEventsPopup);
      this.center = [this.events[idx].lat, this.events[idx].long];
      this.$refs.events[idx].mapObject.openPopup();
    }
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 7,
      center: [31.372399, 36.677842],
      bounds: null,
       hotArray: [
        {
            center: [31.124611, 34.897001],
            radius: 2,
            color: 'orange'
        },
        {
            center: [31.424611, 35.924567],
            radius:2,
            color: 'orange'
        },
        {
            center: [31.624611, 35.124567],
            radius:2,
            color: 'orange'
        },
        {
            center: [ 31.253093, 34.988673],
            radius: 2,
            color: 'orange'
        }
      ]
      
    };
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
      this.$emit('boundsUpdated', bounds);
    },
    clearPopup(id) {
      //let idx = this.events.findIndex(event => event.id == this.currentEventsPopup);
      //this.$refs.events[this.currentEventsPopup].mapObject.closePopup();
      console.log(id +'popup cleared');
      this.$socket.emit('close_event', id);
    }
  }
}
</script>