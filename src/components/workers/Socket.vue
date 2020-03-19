<template>
</template>

<script>
export default {
    mounted() {
        console.log('Hello');
    },
    sockets: {
        getForces(forces) {
            console.log('Got forces list from server' + forces);
            this.$store.dispatch('updateForces', forces);
        },
        getActiveEvents(events) {
            console.log('Got events list from server' + events);
            this.$store.dispatch('updateEvents', events);
        },
        getHotspots(hotspots) {
            console.log('Got hotspots list from server' + hotspots);
            this.$store.dispatch('updateHotspots', hotspots);
        },
    }
}
</script>