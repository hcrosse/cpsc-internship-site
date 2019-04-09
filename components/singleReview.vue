<template>
  <div>
    <div
      style="max-height: 477px"
      class="scroll-y"
    >
      <p>REVIEW LIST INDEX CLICKED: {{ reviewIndexClicked }}</p>
      <div class="greyDiv">
        <p><b>Company Name:</b> </p>
        <p style="text-align: center">
          {{ companyName }}
        </p>
      </div>
      <hr class="singleReviewBreak">
      <div>
        <p><b>Company Address:</b></p>
        <p style="text-align: center">
          {{ companyAddress }}
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
    goBack(index) {
      this.$parent.reviewOpened = false
    },
    setVariables(index) {
      // Set all local variables for displaying review here
      // Current variables are preset just for testing
      // Make sure all variables in the data/return section......
      // .... are set to null by default first

      this.companyName = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].companyname

      this.companyAddress = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].companyAddress
      this.selectedIndustrys = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].selectedIndustrys

      this.selectedInterviewLength = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].selectedInterviewLength
      this.selectedObtainment = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].selectedObtainment
      this.selectedInterviewFormats = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].selectedInterviewFormats

      this.startdate = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].startdate
      this.enddate = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].enddate
      this.selectedEnvironment = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].selectedEnvironment
      this.selectedSkills = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].selectedSkills

      this.selectedRating = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].selectedRating
      this.summary = this.$parent.firestoreReviewsQuery[this.reviewIndexClicked].summary
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
