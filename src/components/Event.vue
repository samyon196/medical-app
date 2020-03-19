<template>
<div dir="rtl">
  <div>
    <v-list-item>
      <v-list-item-content>
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
            description: String
        }
}
</script>

<style>

</style>