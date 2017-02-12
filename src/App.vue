<!-- main app component -->
<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">Vue Realtime Dashboard</h1>
    </md-toolbar>

    <div class="main-content">
      <div class="map">
        <google-map></google-map>
        <div class="map-control">
          <md-toolbar>
            <h1 class="md-title">Map Controls</h1>
          </md-toolbar>

          <md-card md-with-hover>
            <md-card-header>
              <div class="md-title">Demo Card</div>
            </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>

            <md-card-actions>
              <md-button class="md-raised md-primary">Add Random Marker</md-button>
              <md-button class="md-raised md-warn">Delete Random Marker</md-button>
            </md-card-actions>
          </md-card>
        </div>
      </div>
      <div class="region">
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap'

export default {
  name: 'app',
  components: {
    GoogleMap
  }
}
</script>

<style>
.main-content {
  padding: 16px;
}
.map {
  width: 100%;
}
.map-control {
  padding-left: 16px;
  width: 30%;
  float: right;
}
</style>
