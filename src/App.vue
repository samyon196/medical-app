<template>
<v-app class="grey lighten-4">
    <v-navigation-drawer app clipped v-model="drawer" class="grey lighten-3">
        <v-list dense>
        <v-list-item link router :to="{name: 'Home'}" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link router :to="{name: 'Chat'}" exact>
          <v-list-item-action>
            <v-badge v-show="msgNum > 0" overlap color="green" :content="msgNum" :value="msgNum">
                <v-icon>mdi-message-text</v-icon>
            </v-badge>
            <v-icon v-show="msgNum == 0">mdi-message-text</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Chat</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link router :to="{name: 'Dashboard'}" exact>
          <v-list-item-action>
            <v-icon>mdi-monitor-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>RF Chat App</v-toolbar-title>
    </v-app-bar>

    <v-content class="grey lighten-4">
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    //HelloWorld,
  },

  data: () => ({
    //
    drawer: true
  }),
};
</script>
