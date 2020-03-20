<template>
<div dir="rtl">
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-text v-if="this.handlingForces" class="subtitle-1"><span style="color:green">בטיפול: </span> <span v-for="(force, idx) in handlingForces" :key="idx">{{force}}<span v-if="idx != handlingForces.length - 1">, </span></span></v-list-item-text>
        <v-list-item-text v-else class="subtitle-1"><span style="color:red">לא בטיפול</span> </v-list-item-text>

        <v-list-item-title class="title mb-1">{{name}}</v-list-item-title>
        <v-list-item-subtitle>מספר משתתפים: {{numOfParticipants}}</v-list-item-subtitle>
        <v-list-item-subtitle>סוג האירוע: {{type}}</v-list-item-subtitle>
        <v-list-item-subtitle >זמן: {{timestamp}}</v-list-item-subtitle>
        <v-list-item-text class="subtitle-1">תיאור: {{description}}</v-list-item-text>
        
      </v-list-item-content>
    </v-list-item>
  </div>
</div>
</template>

<script>
export default {
    name: 'Event',
        props: {
            id: Number,
            timestamp: String,
            name: String,
            type: String,
            numOfParticipants: Number, 
            description: String,
            handlingForces: Array
        }
}
</script>

<style>

</style>