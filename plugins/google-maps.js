import Vue from "vue";
import * as VueGoogleMaps from "google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places"
  }
});
