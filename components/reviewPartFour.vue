<template>
  <div class="container">
    <v-app>
      <v-card>
        <div>
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
        </div>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratings: ['Very Good', 'Good', 'Average', 'Bad', 'Very Bad'],
      selectedRating: null,
      summary: null
    }
  }
}
</script>
