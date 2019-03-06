<template>
  <div class="container">
    <v-app>
      <v-card>
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
          <div class="mr-4 ml-4 whiteback userGroupHeight">
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
