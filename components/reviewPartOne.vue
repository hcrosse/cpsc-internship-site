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
      <v-text-field
        v-model="companyAddress"
        label="Company Address"
        required
      />

      <h3>Select industry types that are applicable to your internship:</h3>
      <div class="mr-4 ml-4">
        <v-layout row wrap>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Government Contracting" value="gov" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Education" value="edu" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Web Development" value="web" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Application Development" value="app" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Software Development" value="software" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Hardware / Systems" value="hardware" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="IT and Services" value="it" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedIndustrys" label="Research" value="research" />
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
      selectedIndustrys: [],
      allFieldsFilledOut: false,
      alertUser: false

    }
  },
  methods: {
    nextPage: function () {
      this.validateThisPagesFields()

      if (this.allFieldsFilledOut) {
        this.$parent.pageNumber = 2
      }
    },
    validateThisPagesFields: function () {
      if (
        (!this.companyName) ||
        (!this.companyAddress) ||
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
