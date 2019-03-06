<template>
  <div class="container">
    <v-app>
      <v-card>
        <div>
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
        </div>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      menu2: false,
      startdate: null,
      enddate: null
    }
  }
}
</script>
