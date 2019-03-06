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
      menu: false,
      menu2: false,
      companyName: null,
      companyAddress: null,
      selectedRating: null,
      startdate: null,
      enddate: null,
      selectedIndustrys: []
    }
  }
}
</script>
