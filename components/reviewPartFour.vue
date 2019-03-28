<template>
  <div class="container">
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
      :disabled="submissionDisabled"
      color="light-green"
      @click="submitNewReview()"
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
      submissionDisabled: false
    }
  },
  methods: {
    submitNewReview: function () {
      /* submit data to database here */
    }
  }
}
</script>
