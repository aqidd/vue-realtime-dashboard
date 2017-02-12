<template>
	<gmap-map
		:center="center"
		:zoom="7"
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
	        lat: 10.0,
	        lng: 10.0
	      },
	      markers: [
	        {
	          position: {lat: 10.0, lng: 10.0}
	        },
	        {
	          position: {lat: 20.0, lng: 20.0}
	        }
	      ]
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
.vue-map-cont {
  width:100%;
  height: 600px;
  display: block;
}
</style>
