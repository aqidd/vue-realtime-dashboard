// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueMaterial)
Vue.use(VueFire)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCsm1264u4iBvHrvuCmn5AbHBwD5i1pJ0Y'
  }
})

var config = {
  apiKey: 'AIzaSyDzd8cHT470aqvcTFWggQVRqqVhoFvSyIk',
  authDomain: 'vue-realtime-das-1486882747956.firebaseapp.com',
  databaseURL: 'https://vue-realtime-das-1486882747956.firebaseio.com',
  storageBucket: 'vue-realtime-das-1486882747956.appspot.com',
  messagingSenderId: '759206729601'
}
firebase.initializeApp(config)

Vue.prototype.$db = firebase.database()

// css require
require('vue-material/dist/vue-material.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
