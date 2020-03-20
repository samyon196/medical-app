<template>
<div class="hide-scroll" style="overflow-y: auto; height: 500px;">
  <div v-for="(force, idx) in forces" :key="idx" @click="forceClicked(force.id)">
      <Force card v-bind:name="force.name" v-bind:type="force.type" v-bind:event="force.event" />
  </div>
</div>
</template>

<script>
import Force from "./Force"

export default {
    name: 'ForcesList',
    props: {
        forces: Array
    },
    components: {
        Force,
    },
    methods: {
        forceClicked(id) {
            this.$emit('force-clicked', id);
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