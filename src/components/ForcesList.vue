<template>
<div>
  <div v-for="(force, idx) in forces" :key="idx" @click="forceClicked(idx)">
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
    data() {
        return {
            forces: this.$store.getters.getSortedForces
        }
    },
    methods: {
        forceClicked(id) {
            this.$emit('force-clicked', id);
        }
    },
}
</script>

<style>

</style>