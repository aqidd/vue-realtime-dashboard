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
              <md-button class="md-raised md-primary" @click.native="addRandomMarker">Add Random Marker</md-button>
              <md-button class="md-raised md-warn" @click.native="deleteMarker">Delete Marker</md-button>
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
  firebase () {
    return {
      markers: this.$db.ref('markers')
    }
  },
  methods: {
    addRandomMarker () {
      this.$db.ref('markers').push({
        position: {
          lat: -1.243668 + Math.random(),
          lng: 116.85190 + Math.random()
        }
      })
    },
    deleteMarker () {
      if (this.markers.length === 0) {
        alert('tidak ada marker')
        return
      }
      this.$db.ref('markers').child(this.markers[0]['.key']).remove()
    }
  },
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
