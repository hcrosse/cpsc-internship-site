<template>
  <div>
    <div
      style="max-height: 477px"
      class="scroll-y"
    >
      <p>REVIEW LIST INDEX CLICKED: {{ reviewIndexClicked }}</p>
      <p><b>Company Name:</b> </p>
      <p style="text-align: center">
        {{ companyName }}
      </p>
      <hr>
      <p><b>Company Address:</b></p>
      <p style="text-align: center">
        {{ companyAddress }}
      </p>
      <hr>
      <p><b>Relevant Industrys:</b></p>
      <p style="text-align: center">
        {{ selectedIndustrys }}
      </p>
      <hr>
      <p><b>Interview Length:</b></p>
      <p style="text-align: center">
        {{ selectedInterviewLength }}
      </p>
      <hr>
      <p><b>How interview was obtained:</b></p>
      <p style="text-align: center">
        {{ selectedObtainment }}
      </p>
      <hr>
      <p><b>Interview types I recieved:</b></p>
      <p style="text-align: center">
        {{ selectedInterviewFormats }}
      </p>
      <hr>
      <p><b>Dates worked:</b></p>
      <p style="text-align: center">
        {{ startdate }}   <b><i> ...to... </i></b>   {{ enddate }}
      </p>
      <hr>
      <p><b>Work Environment:</b></p>
      <p style="text-align: center">
        {{ selectedEnvironment }}
      </p>
      <hr>
      <p><b>Skills utilitzed:</b></p>
      <p style="text-align: center">
        {{ selectedSkills }}
      </p>
      <hr>
      <p><b>My rating of the company:</b> </p>
      <p style="text-align: center">
        {{ selectedRating }}
      </p>
      <hr>
      <p><b>Summary of my experience:</b> </p>
      <p style="text-align: center">
        {{ summary }}
      </p>
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
</style>
