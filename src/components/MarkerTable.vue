<template>
	<md-table md-sort="markers">
	  <md-table-header>
	    <md-table-row>
	      <md-table-head md-sort-by="meta.name">Marker Name</md-table-head>
	      <md-table-head md-sort-by="position.lat" md-numeric>Latitude</md-table-head>
	      <md-table-head md-sort-by="position.lng" md-numeric>Longitide</md-table-head>
	      <md-table-head md-sort-by="meta.created_date" md-numeric>Created Date</md-table-head>
	    </md-table-row>
	  </md-table-header>

	  <md-table-body>
	    <md-table-row v-for="marker in markers">
	      <md-table-cell>{{marker.meta.name}}</md-table-cell>
	      <md-table-cell>{{marker.position.lat}}</md-table-cell>
	      <md-table-cell>{{marker.position.lng}}</md-table-cell>
	      <md-table-cell>{{marker.meta.created_date}}</md-table-cell>
	    </md-table-row>
	  </md-table-body>
	</md-table>
</template>

<script>
export default {
  firebase () {
    return {
      markers: this.$db.ref('markers')
    }
  }
}
</script>

<style>
.md-table {
	width: 100%;
}
</style>
