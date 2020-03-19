<template>
<div dir="rtl">
<v-card
    v-if="this.card"
    class="mx-auto"
    max-width="200"
    hover
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-text v-if="this.event" style="color:red">באירוע</v-list-item-text>
        <v-list-item-text v-else style="color:green">פנוי</v-list-item-text>
        <v-list-item-title class="headline mb-1">{{name}}</v-list-item-title>
        <v-list-item-text>סוג הכוח: {{type}}</v-list-item-text>
        <v-list-item-subtitle v-if="this.event">משתתף באירוע: {{event}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  <div v-else>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-text v-if="this.event" style="color:red">באירוע</v-list-item-text>
        <v-list-item-text v-else style="color:green">פנוי</v-list-item-text>
        <v-list-item-title class="headline mb-1">{{name}}</v-list-item-title>
        <v-list-item-text>סוג הכוח: {{type}}</v-list-item-text>
        <v-list-item-subtitle v-if="this.event">משתתף באירוע: {{event}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</div>
</template>

<script>
export default {
    name: 'Force',
        props: {
          card: Boolean,
          id: Number,
          name: String,
          type: String,
          event: String,
        }
}
</script>

<style>

</style>