<template>
  <v-app>
    <v-toolbar
      color="#1A73E8"
      dark
      fixed
      app
    >
      <v-toolbar-title
        @click="home"
        v-text="title"
      />

      <v-spacer />

      <!--<div v-if="this.$store.user.">-->
      <!--<v-btn-->
      <!--flat-->
      <!--to="/admin"-->
      <!--@click="swapToAdminView()"-->
      <!--&gt;-->
      <!--Admin Page-->
      <!--</v-btn>-->
      <!--<v-btn-->
      <!--flat-->
      <!--to="/"-->
      <!--@click="attemptLogout()"-->
      <!--&gt;-->
      <!--Logout-->
      <!--</v-btn>-->
      <!--</div>-->
      <div v-if="this.$store.user">
        <v-btn
          flat
          to="/createreview"
          @click="navigateToReviewCreation()"
        >
          Create Review
        </v-btn>

        <v-btn
          flat
          to="/"
          @click="attemptLogout()"
        >
          Logout
        </v-btn>
      </div>
      <div v-else>
        <v-btn
          flat
          outline="true"
          to="/login"
        >
          Sign In
        </v-btn>

        <v-btn
          flat
          outline="true"
          to="/register"
        >
          Register
        </v-btn>
      </div>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      drawer: false,
      adminLoggedIn: false,
      userLoggedIn: false,
      placeholderVariable: false,
      title: 'CPSC Internship Site',
      fixed: false,
      email: '',
      password: ''
    }
  },
  methods: {
    attemptLogin: function () {
      if (this.email === 'admin') {
        this.adminLoggedIn = true
        this.userLoggedIn = false
      } else {
        this.adminLoggedIn = false
        this.userLoggedIn = true
      }
    },
    attemptLogout: function () {
      this.userLoggedIn = false
      this.adminLoggedIn = false
    },
    attemptRegister: function () {
      this.placeholderVariable = true
    },
    swapToAdminView: function () {
      /* make sure to validate/check for admin session token */
      this.placeholderVariable = true
    },
    navigateToReviewCreation: function () {

    },
    home: function () {
      this.$router.push('/')
    }
  }
}
</script>
