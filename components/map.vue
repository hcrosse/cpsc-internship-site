<template>
  <div>
    <gmap-map
      ref="mapRef"
      :center="center"
      :zoom="4"
      style="width:100%;  height: 525px;"
      :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false
      }"
    >
      <gmap-marker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        @click="center=m.position"
      />
    </gmap-map>
  </div>
</template>

<script>

import { db } from '../plugins/firebase.js'

export default {
  name: 'GoogleMap',
  data() {
    return {
      // defaults to view of north america
      center: { lat: 39.33554, lng: -98.72468 },
      markers: [],
      places: [],
      currentPlace: null,
      firestoreReviewsQuery: []
    }
  },
  beforeMount() {
    this.refreshMap()
  },
  methods: {
    testMethod() {
      // eslint-disable-next-line no-console
      console.log(this.firestoreReviewsQuery[0].position)
    },
    refreshMap() {
      const self = this
      db.collection('reviews').where('approvedByAdmin', '==', 'approved')
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            const review = {
              position: { lat: doc.data().lat, lng: doc.data().long },
              id: doc.id
            }
            self.firestoreReviewsQuery.push(review)
            self.markers.push({ position: review.position })
          // this.places.push(this.currentPlace)
          // eslint-disable-next-line no-console
          // console.log(review)
          })
        })
    },
    findPositionByDocId(docId) {
      if (docId === 'reset') {
        const levelOfZoomOnReset = 4
        const marker = { lat: 39.33554, lng: -98.72468 }
        this.panToMarker(marker, levelOfZoomOnReset)
      } else {
        const zoomLevel = 8
        for (let index = 0; index < this.firestoreReviewsQuery.length; ++index) {
          if (this.firestoreReviewsQuery[index].id === docId) {
            this.panToMarker(this.firestoreReviewsQuery[index].position, zoomLevel)
          }
        }
      }
    },
    panToMarker(marker, zoomLevel) {
      this.$refs.mapRef.$mapPromise.then((map) => {
        map.setZoom(zoomLevel)
        map.panTo(marker)
      })

      // this.$refs.mapRef.setCenter(this.firestoreReviewsQuery[0].position)
    }
  }
}
</script>
