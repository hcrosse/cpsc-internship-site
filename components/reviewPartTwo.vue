<template>
  <div class="container">
    <v-alert
      :value="alertUser"
      type="error"
    >
      Please select an option from all dropdown menus, and select atleast one interview type
    </v-alert>
    <div class="row">
      <div class="column prevPage">
        <v-btn
          style="width:100%"
          @click="prevPage()"
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
        ABOUT THE INTERVIEW:
      </h1>

      <v-flex xs12 sm6 d-flex>
        <v-select
          v-model="selectedInterviewLength"
          :items="possibleLengths"
          label="Length of interview process"
          outline
        />
      </v-flex>
      <v-flex xs12 sm6 d-flex>
        <v-select
          v-model="selectedObtainment"
          :items="possibleObtainments"
          label="How interview was obtained"
          outline
        />
      </v-flex>
      <h3>Please select all of the interview types you took during the hiring process</h3>
      <v-checkbox v-model="selectedInterviewFormats" label="Phone interview" value="Phone interview" />
      <v-checkbox v-model="selectedInterviewFormats" label="Video interview" value="Video interview" />
      <v-checkbox v-model="selectedInterviewFormats" label="In person interview" value="In person interview" />
      <v-checkbox v-model="selectedInterviewFormats" label="Other" value="Other" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      possibleLengths: ['< 1 month', '1-3 months', '3-6 months', '6+ months'],
      possibleObtainments: ['Referral', 'Online Application', 'Job Fair', 'Other'],
      selectedInterviewLength: null,
      selectedObtainment: null,
      selectedInterviewFormats: [],
      allFieldsFilledOut: false,
      alertUser: false
    }
  },
  beforeMount() {
    this.selectedInterviewLength = this.$parent.selectedInterviewLength
    this.selectedObtainment = this.$parent.selectedObtainment
    this.selectedInterviewFormats = this.$parent.selectedInterviewFormats
    // save parent data to itself and deal with it
  },
  methods: {
    updateParentData: function () {
      this.$parent.selectedInterviewLength = this.selectedInterviewLength
      this.$parent.selectedObtainment = this.selectedObtainment
      this.$parent.selectedInterviewFormats = this.selectedInterviewFormats
    },
    nextPage: function () {
      this.validateThisPagesFields()

      if (this.allFieldsFilledOut) {
        this.updateParentData()
        this.$parent.pageNumber = 3
      }
    },
    prevPage: function () {
      this.updateParentData()
      this.$parent.pageNumber = 1
    },
    validateThisPagesFields: function () {
      if (
        (!this.selectedInterviewLength) ||
        (!this.selectedObtainment) ||
        (this.selectedInterviewFormats === undefined || this.selectedInterviewFormats.length === 0)
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
