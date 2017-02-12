<template>
	<gmap-map
		:center="center"
		:zoom="9"
	>
		<gmap-marker
			v-for="marker in markers"
			:position.sync="marker.position"
			:clickable="true"
			:draggable="false"
			@click="onMarkerClick(marker)"
		>
		</gmap-marker>
	</gmap-map>
</template>

<script>
	export default {
	  data () {
	    return {
	      center: {
	        lat: -1.243668,
	        lng: 116.85190
	      }
	    }
	  },
	  firebase () {
	    return {
	      markers: this.$db.ref('markers')
	    }
	  },
	  methods: {
	    onMarkerClick (marker) {
	      console.log(marker)
	    }
	  }
	}
</script>

<style>
.vue-map-container {
  width:100%;
  float: left;
  height: 600px;
  display: block;
}
</style>
