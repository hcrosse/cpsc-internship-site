<template>
  <div>
    <div
      style="max-height: 477px"
      class="scroll-y"
    >
      <div class="greyDiv">
        <p><b>Company Name:</b> </p>
        <p style="text-align: center">
          {{ companyName }}
        </p>
      </div>
      <hr class="singleReviewBreak">
      <div class="greyDiv">
        <p><b>Relevant Industrys:</b></p>
        <p style="text-align: center">
          {{ selectedIndustrys }}
        </p>
      </div>
      <hr class="singleReviewBreak">
      <div>
        <p><b>Interview Length:</b></p>
        <p style="text-align: center">
          {{ selectedInterviewLength }}
        </p>
      </div>
      <hr class="singleReviewBreak">
      <div class="greyDiv">
        <p><b>How interview was obtained:</b></p>
        <p style="text-align: center">
          {{ selectedObtainment }}
        </p>
      </div>
      <hr class="singleReviewBreak">
      <div>
        <p><b>Interview types I recieved:</b></p>
        <p style="text-align: center">
          {{ selectedInterviewFormats }}
        </p>
      </div>
      <hr class="singleReviewBreak">
      <div class="greyDiv">
        <p><b>Dates worked:</b></p>
        <p style="text-align: center">
          {{ startdate }}   <b><i> ...to... </i></b>   {{ enddate }}
        </p>
      </div>
      <hr class="singleReviewBreak">
      <div>
        <p><b>Work Environment:</b></p>
        <p style="text-align: center">
          {{ selectedEnvironment }}
        </p>
      </div>
      <hr class="singleReviewBreak">
      <div class="greyDiv">
        <p><b>Skills utilitzed:</b></p>
        <p style="text-align: center">
          {{ selectedSkills }}
        </p>
      </div>
      <hr class="singleReviewBreak">
      <div>
        <p><b>My rating of the company:</b> </p>
        <p style="text-align: center">
          {{ selectedRating }}
        </p>
      </div>
      <hr class="singleReviewBreak">
      <div class="greyDiv">
        <p><b>Summary of my experience:</b> </p>
        <p style="text-align: center">
          {{ summary }}
        </p>
      </div>
      <hr class="singleReviewBreak">
    </div>
    <div style="text-align: center">
      <v-btn
        @click="goBack()"
      >
        BACK
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      reviewOpened: true,
      selected: [2],
      reviewIndexClicked: this.$parent.reviewIndexClicked,
      theReview: null,

      companyName: '',
      companyAddress: '',
      selectedIndustrys: [],

      selectedInterviewLength: '',
      selectedObtainment: '',
      selectedInterviewFormats: [],

      startdate: '',
      enddate: '',
      selectedEnvironment: '',
      selectedSkills: [''],

      selectedRating: '',
      summary: ''
    }
  },
  beforeMount() {
    this.setVariables()
  },
  methods: {
    goBack() {
      this.$emit('messagefromSR', 'reset')
      this.$parent.reviewOpened = false
    },
    setVariables() {
      this.theReview = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked]

      this.companyName = this.theReview.data.companyname
      this.companyAddress = this.theReview.data.companyAddress
      this.selectedIndustrys = this.theReview.data.selectedIndustrys

      this.selectedInterviewLength = this.theReview.data.selectedInterviewLength
      this.selectedObtainment = this.theReview.data.selectedObtainment
      this.selectedInterviewFormats = this.theReview.data.selectedInterviewFormats

      this.startdate = this.theReview.data.startdate
      this.enddate = this.theReview.data.enddate
      this.selectedEnvironment = this.theReview.data.selectedEnvironment
      this.selectedSkills = this.theReview.data.selectedSkills

      this.selectedRating = this.theReview.data.selectedRating
      this.summary = this.theReview.data.summary
    }
  }
}
</script>
<style>
.singleReviewBreak {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
}
.greyDiv{
  background-color: #edf2f9;
}
</style>
