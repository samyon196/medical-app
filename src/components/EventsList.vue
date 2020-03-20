<template>
<div class="hide-scroll" style="overflow-y: auto; height: 500px;">
  <div v-for="(event, idx) in events" :key="idx" @click="eventClicked(event.id)">
      <Event card v-bind:name="event.name" v-bind:type="event.type" v-bind:timestamp="event.timestamp" v-bind:description="event.description" v-bind:num-of-participants="event.numOfParticipants" v-bind:handling-forces="event.handlingForces"/>
  </div>
</div>
</template>

<script>
import Event from "./Event"

export default {
    name: 'EventsList',
    props: {
        events: Array
    },
    components: {
        Event,
    },
    methods: {
        eventClicked(id) {
            this.$emit('event-clicked', id);
        }
    },
}
</script>

<style>
.hide-scroll::-webkit-scrollbar{
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
</style>