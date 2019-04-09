import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCPGrK48OT63jnfsHjlrHqUjI8VtT0alyc',
    libraries: 'places'
  }
})
