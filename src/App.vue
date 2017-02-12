<!-- main app component -->
<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">Vue Realtime Dashboard</h1>
    </md-toolbar>

    <div class="main-content">
      <md-layout md-gutter class="map">
        <md-layout md-flex="70">
          <google-map></google-map>  
          <marker-table></marker-table>
        </md-layout>

        <md-layout md-align="center" md-flex="20" md-flex-offset="5">
          <div class="map-data">
            <md-toolbar>
              <h1 class="md-title">Map Controls</h1>
            </md-toolbar>

            <md-card md-with-hover>
              <md-card-header>
                <div class="md-title">Manage Markers</div>
              </md-card-header>

              <md-card-content>
                Click <strong>Add Random Marker</strong> to add random marker around Balikpapan with random values. Click <strong>Delete Marker</strong> to delete random marker from map.
              </md-card-content>

              <md-card-actions>
                <md-button class="md-raised md-primary" @click.native="addRandomMarker">Add Random Marker</md-button>
                <md-button class="md-raised md-warn" @click.native="deleteMarker">Delete Marker</md-button>
              </md-card-actions>
            </md-card>
            <br>
            <md-card md-with-hover md-inset="true">
              <pie-chart class="card-content" :chartData="pieData" :options="{}"></pie-chart>
            </md-card>
            <br>
            <md-card md-with-hover md-inset="true">
              <bar-chart class="card-content" :chartData="barData" :options="{}"></bar-chart>
            </md-card>
          </div>

        </md-layout>
      </md-layout>
    </div>
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap'
import MarkerTable from './components/MarkerTable'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

export default {
  name: 'app',
  data () {
    return {
      ratingLabels: ['ancur', 'jelek', 'pas', 'oke', 'mantab'],
      ratingFilter: [0, 1, 2, 3, 4]
    }
  },
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
        },
        meta: {
          name: 'marker ' + (this.markers.length + 1),
          rating: parseInt(Math.random() * 100) % 5,
          created_date: `${new Date()}`
        }
      })
      this.ratingFilter.reverse().reverse()
    },
    deleteMarker () {
      if (this.markers.length === 0) {
        alert('tidak ada marker')
        return
      }
      this.$db.ref('markers').child(this.markers[0]['.key']).remove()
    },
    countTotalRating (rate) {
      if (this.markers === undefined) {
        return 0
      }

      return this.markers.filter((marker) => marker.meta.rating === rate).length
    }
  },
  computed: {
    pieData () {
      return {
        labels: this.ratingLabels,
        datasets: [
          {
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#55FF56', '#33DD56'],
            data: this.ratingFilter.map((rating) => this.countTotalRating(rating))
          }
        ]
      }
    },
    barData () {
      return {
        labels: this.ratingLabels,
        datasets: [
          {
            label: 'Jumlah Rating',
            backgroundColor: '#36A2EB',
            data: this.ratingFilter.map((rating) => this.countTotalRating(rating))
          }
        ]
      }
    }
  },
  components: {
    GoogleMap,
    MarkerTable,
    PieChart,
    BarChart
  }
}
</script>

<style>
.main-content, .card-content {
  padding: 16px;
}
.map-control {
  margin-bottom: 16px;
}
</style>
