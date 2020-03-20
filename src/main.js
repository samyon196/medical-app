import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'leaflet/dist/leaflet.css';
import VueSocketIO from 'vue-socket.io';


Vue.use(new VueSocketIO({connection: 'http://localhost:8080'}));
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
