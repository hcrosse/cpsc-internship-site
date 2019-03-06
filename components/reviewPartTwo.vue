<template>
  <div class="container">
    <v-app>
      <v-card>
        <div>
          <h1>
            ABOUT THE INTERVIEW:
          </h1>
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
