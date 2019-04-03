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
          :disabled="true"
        >
          Next page
        </v-btn>
      </div>
    </div>
    <h1>
      YOUR OPINION:
    </h1>

    <v-flex xs12 sm6 d-flex>
      <v-select
        v-model="selectedRating"
        :items="ratings"
        label="Rate This Company"
        outline
      />
    </v-flex>
    <v-layout row wrap>
      <v-flex xs6>
        <v-textarea
          v-model="summary"
          auto-grow
          box
          color="blue"
          label="Summary of your experience with the company"
          rows="4"
        />
      </v-flex>
    </v-layout>
    <v-btn
      style="width:100%"
      :disabled="isDisabled"
      color="light-green"
      @click="checkAndSubmit()"
    >
      Submit Review
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratings: ['Very Good', 'Good', 'Average', 'Bad', 'Very Bad'],
      selectedRating: null,
      summary: null,
      allFieldsFilledOut: false,
      alertUser: false
    }
  },
  computed: {
    isDisabled() {
      if (!this.summary || !this.selectedRating) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    prevPage: function () {
      this.$parent.pageNumber = 3
    },
    validateThisPagesFields: function () {
      if (
        (!this.selectedRating) ||
        (!this.summary)
      ) {
        this.allFieldsFilledOut = false
        this.alertUser = true
      } else {
        this.allFieldsFilledOut = true
        this.alertUser = false
      }
    },
    checkAndSubmit: function () {
      this.validateThisPagesFields()
      if (this.allFieldsFilledOut) {
        this.$parent.submitNewReview()
      }
    }
  }
}
</script>
