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
      /* make sure to validate login/session token */

      // const router = createRouter()

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
          summary: this.summary,
          approvedByAdmin: 'pending'
        }).then(
          this.$router.push('/')
        )
        this.submitClickedAlready = true
      }
    }
  }
}
</script>
