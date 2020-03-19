<template>
<div>
  <div v-for="(force, idx) in sortedArray" :key="idx" @click="forceClicked(force.id)">
      <Force v-bind:name="force.name" v-bind:type="force.type" v-bind:event="force.event" />
  </div>
</div>
</template>

<script>
import Force from "./Force"

export default {
    name: 'ForcesList',
    components: {
        Force,
    },
    props: {

    },
    data: function() {
        return {
            forces: [
                {name:'אמבולנס 879', type:'מד"א', event:"תאונת דרכים צומת תפוח"},
                {name:'פלוגת הראל', type:'669'},
                {name:'גדוד 33', type:'תאג"ד', event:"שריפה בארמון הנציב"},
                {name:'גדוד 30', type:'תאג"ד'},
                {name:'מ"פ גולן', type:'מג"ב'}
            ]
        }
    },
    methods: {
        forceClicked(id) {
            this.$emit('force-clicked', id);
        }
    },
    computed: {
        sortedArray: function() {
            function compare(a, b) {
            if (a.event && !b.event)
                return 1;
            if (b.event && !a.event)
                return -1;
            return 0;
            }

            return this.forces.sort(compare);
        }
}
}
</script>

<style>

</style>