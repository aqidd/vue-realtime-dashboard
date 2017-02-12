<!-- main app component -->
<template>
  <div id="app">
    <md-whiteframe md-theme="blue" md-tag="md-toolbar" md-elevation="1">
      <md-toolbar>
        <span class="md-title">Vue Real-Time Dashboard</span>
      </md-toolbar>
    </md-whiteframe>
    <google-map></google-map>
  </div>
</template>

<script>
import Hello from './components/Hello'
import GoogleMap from './components/GoogleMap'

export default {
  name: 'app',
  components: {
    Hello,
    GoogleMap
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.md-title {
  height: 500px
}
</style>
