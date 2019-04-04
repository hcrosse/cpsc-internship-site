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
      wasclicked: '',

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
    }
  }
}
</script>
