<template>
<v-app class="grey lighten-4">
    <v-navigation-drawer app clipped v-model="drawer" class="grey lighten-3">
        <v-list dense>
        <v-list-item link router :to="{name: 'Map'}" exact>
          <v-list-item-action>
            <v-icon>mdi-compass</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Map</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link router :to="{name: 'Forces'}" exact>
          <v-list-item-action>
            <v-icon>mdi-compass</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Forces</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content class="grey lighten-4">
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    drawer: true
  }),
};
</script>
