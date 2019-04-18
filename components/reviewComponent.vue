<template>
  <div>
    <div v-if="pageNumber==1">
      <part1 />
    </div>
    <div v-else-if="pageNumber==2">
      <part2 />
    </div>
    <div v-else-if="pageNumber==3">
      <part3 />
    </div>
    <div v-else-if="pageNumber==4">
      <part4 />
    </div>
    <p style="text-align: center">
      <i>Please note that reviews will submitted to the site administrator for approval before being viewable by others</i>
    </p>
  </div>
</template>

<script>
import part1 from '~/components/reviewPartOne.vue'
import part2 from '~/components/reviewPartTwo.vue'
import part3 from '~/components/reviewPartThree.vue'
import part4 from '~/components/reviewPartFour.vue'
import { db } from '../plugins/firebase.js'
// import { createRouter } from '../.nuxt/router.js'

export default {
  layout: 'default',
  components: {
    part1,
    part2,
    part3,
    part4
  },
  data() {
    return {
      pageNumber: 1,
      submitClickedAlready: false,

      companyName: null,
      companyAddress: null,
      lat: null,
      long: null,
      selectedIndustrys: [],

      selectedInterviewLength: null,
      selectedObtainment: null,
      selectedInterviewFormats: [],

      startdate: null,
      enddate: null,
      selectedEnvironment: null,
      selectedSkills: [],

      selectedRating: null,
      summary: null
    }
  },
  methods: {
    submitNewReview: function () {
      // this variable used to sort reviews later in main list
      let currentTime = new Date()
      // this if block used to sort reviews by numerical rating instead of converting from text later
      let numericalRating = 0
      if (this.selectedRating === 'Very Good') {
        numericalRating = 5
      } else if (this.selectedRating === 'Good') {
        numericalRating = 4
      } else if (this.selectedRating === 'Average') {
        numericalRating = 3
      } else if (this.selectedRating === 'Bad') {
        numericalRating = 2
      } else {
        numericalRating = 1
      }

      if (!this.submitClickedAlready) {
        db.collection('reviews').add({
          companyname: this.companyName,
          // companyAddress: this.companyAddress,
          lat: this.lat,
          long: this.long,
          selectedIndustrys: this.selectedIndustrys,
          selectedInterviewLength: this.selectedInterviewLength,
          selectedObtainment: this.selectedObtainment,
          selectedInterviewFormats: this.selectedInterviewFormats,
          startdate: this.startdate,
          enddate: this.enddate,
          selectedEnvironment: this.selectedEnvironment,
          selectedSkills: this.selectedSkills,
          selectedRating: this.selectedRating,
          numericalRating: numericalRating,
          summary: this.summary,
          approvedByAdmin: 'pending',
          dateReviewAdded: currentTime
        }).then(
          this.$router.push('/')
        )
        this.submitClickedAlready = true
      }
    }
  }
}
</script>
