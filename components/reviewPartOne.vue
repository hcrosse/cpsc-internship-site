<template>
  <div class="container">
    <v-alert
      :value="alertUser"
      type="error"
    >
      Please fill out all fields and select atleast one industry
    </v-alert>
    <div class="row">
      <div class="column prevPage">
        <v-btn
          style="width:100%"
          :disabled="true"
        >
          Prev page
        </v-btn>
      </div>
      <div class="column nextPage">
        <v-btn
          style="width:100%"
          @click="nextPage()"
        >
          Next page
        </v-btn>
      </div>
    </div>
    <div>
      <h1>
        ABOUT THE COMPANY:
      </h1>

      <v-text-field
        v-model="companyName"
        label="Company name"
        required
      />
      <gmap-autocomplete
        placeholder="Enter address for company"
        @place_changed="setPlace"
      />

      <hr style="margin-bottom: 30px">

      <h3>Select industry types that are applicable to your internship:</h3>
      <div class="mr-4 ml-4">
        <v-layout row wrap>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Government Contracting" value="Government Contracting" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Education" value="Education" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Web Development" value="Web Development" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Application Development" value="Application Development" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Software Development" value="Software Development" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Hardware / Systems" value="Hardware / Systems" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="IT Services" value="IT Services" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Research" value="Research" />
          </v-flex>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: null,
      companyAddress: null,
      lat: null,
      long: null,
      selectedIndustrys: [],
      allFieldsFilledOut: false,
      alertUser: false

    }
  },
  beforeMount() {
    this.companyName = this.$parent.companyName
    this.companyAddress = this.$parent.companyAddress
    this.selectedIndustrys = this.$parent.selectedIndustrys
    // save parent data to itself and deal with it
  },
  methods: {
    nextPage: function () {
      this.validateThisPagesFields()

      if (this.allFieldsFilledOut) {
        this.updateParentData()
        this.$parent.pageNumber = 2
      }
    },
    setPlace(place) {
      this.lat = place.geometry.location.lat()
      this.long = place.geometry.location.lng()
    },
    updateParentData: function () {
      this.$parent.companyName = this.companyName
      // this.$parent.companyAddress = this.companyAddress
      this.$parent.lat = this.lat
      this.$parent.long = this.long
      this.$parent.selectedIndustrys = this.selectedIndustrys
    },
    validateThisPagesFields: function () {
      if (
        (!this.companyName) ||
        (!this.lat) ||
        (!this.long) ||
        (this.selectedIndustrys === undefined || this.selectedIndustrys.length === 0)
      ) {
        this.allFieldsFilledOut = false
        this.alertUser = true
      } else {
        this.allFieldsFilledOut = true
        this.alertUser = false
      }
    }
  }
}
</script>

<style>

.pac-container, .pac-item {
    width: inherit !important;
}

</style>
