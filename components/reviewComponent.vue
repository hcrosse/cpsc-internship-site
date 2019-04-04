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
  </div>
</template>

<script>
import part1 from '~/components/reviewPartOne.vue'
import part2 from '~/components/reviewPartTwo.vue'
import part3 from '~/components/reviewPartThree.vue'
import part4 from '~/components/reviewPartFour.vue'

import firebase from 'firebase'

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

      companyName: null,
      companyAddress: null,
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
      const db = firebase.firestore()
      db.collection('reviews').add({
        companyname: this.companyName,
        companyAddress: this.companyAddress,
        selectedIndustrys: this.selectedIndustrys,
        selectedInterviewLength: this.selectedInterviewLength,
        selectedObtainment: this.selectedObtainment,
        selectedInterviewFormats: this.selectedInterviewFormats,
        startdate: this.startdate,
        enddate: this.enddate,
        selectedEnvironment: this.selectedEnvironment,
        selectedSkills: this.selectedSkills,
        selectedRating: this.selectedRating,
        summary: this.summary
      })
    }
  }
}
</script>
