<template>
<div dir="rtl">
    <v-card
    v-if="this.card"
    class="mx-auto"
    max-width="200"
    hover
    outlined
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-text v-if="this.handlingForces.length > 0" class="subtitle-1"><span style="color:green">בטיפול: </span> <span v-for="(force, idx) in handlingForces" :key="idx">{{force}}<span v-if="idx != handlingForces.length - 1">, </span></span></v-list-item-text>
        <v-list-item-text v-else class="subtitle-1"><span style="color:red">לא בטיפול</span> </v-list-item-text>
        <v-list-item-title class="title mb-1">{{name}}</v-list-item-title>
        <v-list-item-subtitle>מספר משתתפים: {{numOfParticipants}}</v-list-item-subtitle>
        <v-list-item-subtitle>סוג האירוע: {{type}}</v-list-item-subtitle>
        <v-list-item-subtitle >זמן: {{timestamp}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  <div v-else>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-text v-if="this.handlingForces.length > 0" class="subtitle-1"><span style="color:green">בטיפול: </span> <span v-for="(force, idx) in handlingForces" :key="idx">{{force}}<span v-if="idx != handlingForces.length - 1">, </span></span></v-list-item-text>
        <v-list-item-text v-else class="subtitle-1"><span style="color:red">לא בטיפול</span> </v-list-item-text>
        <v-list-item-title class="title mb-1">{{name}}</v-list-item-title>
        <v-list-item-subtitle>מספר משתתפים: {{numOfParticipants}}</v-list-item-subtitle>
        <v-list-item-subtitle>סוג האירוע: {{type}}</v-list-item-subtitle>
        <v-list-item-subtitle >זמן: {{timestamp}}</v-list-item-subtitle>
        <v-list-item-text class="subtitle-1">תיאור: {{description}}</v-list-item-text>
        <div class="text-center">
        <v-btn class="mx-2" fab dark small color="red" @click="deleteClicked">
            <v-icon dark>mdi-delete</v-icon>
        </v-btn>
        </div>
      </v-list-item-content>
    </v-list-item>
  </div>
</div>
</template>

<script>
export default {
    name: 'Event',
        props: {
            card: Boolean,
            id: Number,
            timestamp: String,
            name: String,
            type: String,
            numOfParticipants: Number, 
            description: String,
            handlingForces: Array
        },
        methods: {
            deleteClicked() {
                console.log(this.id + "was deleted");
                this.$emit('delete-event');
            }
        },
}
</script>

<style>

</style>