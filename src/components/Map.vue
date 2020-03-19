<template>

  <div style="height: 350px;">
    <div class="info" style="height: 15%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>
    <l-map
      style="height: 130%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >

      <l-tile-layer :url="url"></l-tile-layer>
    <l-circle-marker v-for="(item, index) in eventsArray" 
        :key="index"
        :lat-lng="item.center"
        :radius="item.radius"
        color="red"
    />

    <l-circle v-for="(item, index) in hotArray" 
        :key="index"
        :lat-lng="item.center"
        :radius="item.radius"
        color="orange"
    />

    <l-circle-marker v-for="(item, index) in forcesArray" 
        :key="index"
        :lat-lng="item.center"
        :radius="item.radius"
        color="blue"
    />
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LCircle, LCircleMarker} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LCircle,
    LCircleMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 7,
      center: [31.372399, 36.677842],
      bounds: null,
      eventsArray: [
        {
            center: [31.524611, 34.597001],
            radius: 2,
            color: 'red'
        },
        {
            center: [31.524611, 35.324567],
            radius: 2,
            color: 'red'
        },
        {
            center: [31.924611, 35.324567],
            radius: 2,
            color: 'red'
        },
        {
        center: [ 31.253093, 34.788673],
            radius: 2,
            color: 'red'
        }
      ],
     
     forcesArray: [
        {
            center: [31.924611, 34.897001],
            radius: 2,
            color: 'blue'
        },
        {
            center: [31.224611, 35.924567],
            radius: 2,
            color: 'blue'
        },
        {
            center: [31.424611, 35.124567],
            radius: 2,
            color: 'blue'
        },
        {
            center: [ 31.153093, 34.088673],
            radius: 2,
            color: 'blue'
        }
      ],
       hotArray: [
        {
            center: [31.124611, 34.897001],
            radius: 10000,
            color: 'orange'
        },
        {
            center: [31.424611, 35.924567],
            radius:10000,
            color: 'orange'
        },
        {
            center: [31.624611, 35.124567],
            radius:10000,
            color: 'orange'
        },
        {
            center: [ 31.253093, 34.988673],
            radius: 10000,
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
    }
  }
}
</script>
