<template>
  <div class="container">
    <div>
      <v-alert
        :value="alertUser"
        type="error"
      >
        Please select an option from all dropdown menus, fill out all data fields, and select atleast one skill utilized
      </v-alert>
      <div class="row">
        <div class="column prevPage">
          <v-btn
            style="width:100%"
            @click="prevPage()"
          >
            Prev page
          </v-btn>
        </div>
        <div class="column nextPage">
          <v-btn
            style="width:100%"
            @click="nextPage()"
          >
            Next page
          </v-btn>
        </div>
      </div>
      <h1>
        ABOUT THE JOB:
      </h1>

      <v-layout row wrap>
        <v-flex xs12 sm6 md4>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="startdate"
                label="Start Date"
                prepend-icon="event"
                readonly
                v-on="on"
              />
            </template>
            <v-date-picker v-model="startdate" @input="menu = false" />
          </v-menu>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm6 md4>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="enddate"
                label="End Date"
                prepend-icon="event"
                readonly
                v-on="on"
              />
            </template>
            <v-date-picker v-model="enddate" @input="menu2 = false" />
          </v-menu>
        </v-flex>
        <v-spacer />
      </v-layout>
      <v-flex xs12 sm6 d-flex>
        <v-select
          v-model="selectedEnvironment"
          :items="possibleEnvironments"
          label="Working Environment Description"
          outline
        />
      </v-flex>
      <h3>Skills Utilizied / Learned</h3>
      <div class="mr-4 ml-4">
        <v-layout row wrap>
          <v-flex xs6>
            <v-checkbox v-model="selectedSkills" label="Python" value="Python" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedSkills" label="Java" value="Java" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedSkills" label="Javascript" value="Javascript" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedSkills" label="C++/C" value="C++/C" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedSkills" label="Linux" value="Linux" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedSkills" label="Ruby" value="Ruby" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedSkills" label="PHP" value="PHP" />
          </v-flex>
          <v-flex xs6>
            <v-checkbox v-model="selectedSkills" label="C#" value="C#" />
          </v-flex>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      menu2: false,
      possibleEnvironments: ['Open Office', 'Private Office', 'Cubicle', 'Lab', 'Remote Position', 'Other'],
      startdate: null,
      enddate: null,
      selectedEnvironment: null,
      selectedSkills: [],
      allFieldsFilledOut: false,
      alertUser: false
    }
  },
  beforeMount() {
    this.startdate = this.$parent.startdate
    this.enddate = this.$parent.enddate
    this.selectedEnvironment = this.$parent.selectedEnvironment
    this.selectedSkills = this.$parent.selectedSkills
    // save parent data to itself and deal with it
  },
  methods: {
    updateParentData: function () {
      this.$parent.startdate = this.startdate
      this.$parent.enddate = this.enddate
      this.$parent.selectedEnvironment = this.selectedEnvironment
      this.$parent.selectedSkills = this.selectedSkills
    },
    nextPage: function () {
      this.validateThisPagesFields()

      if (this.allFieldsFilledOut) {
        this.updateParentData()
        this.$parent.pageNumber = 4
      }
    },
    prevPage: function () {
      this.updateParentData()
      this.$parent.pageNumber = 2
    },
    validateThisPagesFields: function () {
      if (
        (!this.startdate) ||
        (!this.enddate) ||
        (!this.selectedEnvironment) ||
        (this.selectedSkills === undefined || this.selectedSkills.length === 0)
      ) {
        this.allFieldsFilledOut = false
        this.alertUser = true
      } else {
        this.allFieldsFilledOut = true
        this.alertUser = false
      }
    }
  }
}
</script>
