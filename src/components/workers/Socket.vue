<template>
</template>

<script>
export default {
    mounted() {
        console.log('Hello');
    },
    sockets: {
        update_forces(forces) {
            //console.log('Got forces list from server' + forces);
            forces = JSON.parse(forces);
            for(let force of forces) {
                force.id = force.force_id;
                delete force.force_id;
                force.lat = force.latitude;
                delete force.latitude;
                force.long = force.longitude;
                delete force.longitude;
                force.type = force.type_name;
                delete force.type_name;
                force.event = force.event_name;
                delete force.event_name;
            }
            this.$store.dispatch('updateForces', forces);
        },
        update_events(events) {
            //console.log('Got events list from server' + events);
            events = JSON.parse(events);
            for(let event of events) {
                event.id = event.event_id;
                delete event.event_id;
                event.lat = event.latitude;
                delete event.latitude;
                event.long = event.longitude;
                delete event.longitude;
                event.type = event.type_name;
                delete event.type_name;
                event.event = event.event_name;
                delete event.event_name;
                event.isOpen = event.event_open;
                delete event.event_open;
                event.description = event.event_description;
                delete event.event_description;
                event.numOfParticipants = event.num_participants;
                delete event.num_participants;
            }
            this.$store.dispatch('updateEvents', events);
        },
        update_hotspots(hotspots) {
            console.log('Got hotspots list from server' + hotspots);
            hotspots = JSON.parse(hotspots);
            for(let hotspot of hotspots) {
                hotspot.radius = hotspot.radius*1000;
            }
            console.log('dispateced update hot');
            //this.$store.dispatch('updateHotspots', hotspots);
        },
    }
}
</script>