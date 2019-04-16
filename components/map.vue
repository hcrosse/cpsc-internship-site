<template>
  <div>
    <div>
      <v-btn
        @click="findPositionByDocId()"
      >
        Test
      </v-btn>
      <br>
    </div>
    <br>
    <gmap-map
      ref="mapRef"
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
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
      // defaults to Fredericksburg, VA
      center: { lat: 38.303299, lng: -77.460663 },
      markers: [],
      // { position: { lat: 38.303299, lng: -77.460663 } },
      // { position: { lat: 38.468369, lng: -77.440102 } },
      // { position: { lat: 38.336310, lng: -77.051540 } }],
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
      // const docId = 'V3AconCzFXOrOLrL8tVf'
      for (let index = 0; index < this.firestoreReviewsQuery.length; ++index) {
        if (this.firestoreReviewsQuery[index].id === docId) {
          this.panToMarker(this.firestoreReviewsQuery[index].position)
        }
      }
      /*
      for each (review in this.firestoreReviewsQuery) {
        if (review.data().id == docId) {
          this.panToMarker(review.position)
        }
      }
      */
    },
    panToMarker(marker) {
      this.$refs.mapRef.$mapPromise.then((map) => {
        map.setZoom(8)
        map.panTo(marker)
      })

      // this.$refs.mapRef.setCenter(this.firestoreReviewsQuery[0].position)
    }
  }
}
</script>
