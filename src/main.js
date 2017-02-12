// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueMaterial)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCsm1264u4iBvHrvuCmn5AbHBwD5i1pJ0Y'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
