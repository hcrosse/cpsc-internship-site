<template>
  <div class="container">
    <v-app>
      <v-card>
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
          <v-checkbox v-model="selectedInterviewFormats" label="Phone interview" value="phone" />
          <v-checkbox v-model="selectedInterviewFormats" label="Video interview" value="video" />
          <v-checkbox v-model="selectedInterviewFormats" label="In person interview" value="inperson" />
          <v-checkbox v-model="selectedInterviewFormats" label="Other" value="other" />
        </div>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      possibleLengths: ['< 1 month', '1-3 months', '3-6 months', '6+ months'],
      selectedInterviewLength: null,
      possibleObtainments: ['Referral', 'Online Application', 'Job Fair', 'Other'],
      selectedObtainment: null,
      selectedInterviewFormats: []
    }
  }
}
</script>
