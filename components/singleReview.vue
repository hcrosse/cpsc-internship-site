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
      <hr>
      <div>
        <p><b>Company Address:</b></p>
        <p style="text-align: center">
          {{ companyAddress }}
        </p>
      </div>
      <hr>
      <div class="greyDiv">
        <p><b>Relevant Industrys:</b></p>
        <p style="text-align: center">
          {{ selectedIndustrys }}
        </p>
      </div>
      <hr>
      <div>
        <p><b>Interview Length:</b></p>
        <p style="text-align: center">
          {{ selectedInterviewLength }}
        </p>
      </div>
      <hr>
      <div class="greyDiv">
        <p><b>How interview was obtained:</b></p>
        <p style="text-align: center">
          {{ selectedObtainment }}
        </p>
      </div>
      <hr>
      <div>
        <p><b>Interview types I recieved:</b></p>
        <p style="text-align: center">
          {{ selectedInterviewFormats }}
        </p>
      </div>
      <hr>
      <div class="greyDiv">
        <p><b>Dates worked:</b></p>
        <p style="text-align: center">
          {{ startdate }}   <b><i> ...to... </i></b>   {{ enddate }}
        </p>
      </div>
      <hr>
      <div>
        <p><b>Work Environment:</b></p>
        <p style="text-align: center">
          {{ selectedEnvironment }}
        </p>
      </div>
      <hr>
      <div class="greyDiv">
        <p><b>Skills utilitzed:</b></p>
        <p style="text-align: center">
          {{ selectedSkills }}
        </p>
      </div>
      <hr>
      <div>
        <p><b>My rating of the company:</b> </p>
        <p style="text-align: center">
          {{ selectedRating }}
        </p>
      </div>
      <hr>
      <div class="greyDiv">
        <p><b>Summary of my experience:</b> </p>
        <p style="text-align: center">
          {{ summary }}
        </p>
      </div>
      <hr>
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

      companyName: 'Google',
      companyAddress: '123 Fake Street, Fredericksburg VA, 22407',
      selectedIndustrys: ['Web Development', 'Software Development'],

      selectedInterviewLength: '1-3 months',
      selectedObtainment: 'Online Application',
      selectedInterviewFormats: ['Phone interview', 'In Person Interview'],

      startdate: '01-01-1901',
      enddate: '01-01-1901',
      selectedEnvironment: 'Open Office',
      selectedSkills: ['Java', 'C++'],

      selectedRating: 'Very Bad',
      summary: 'Something something something, Googles spying on me.  Something something something, my cat is up a tree.  Something something something, Google makes bad ice tea.  Something something something, I badly hurt my knee.'
    }
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
    }
  }
}
</script>
<style>
hr {
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
