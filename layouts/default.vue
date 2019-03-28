<template>
  <v-app>
    <v-toolbar
      color="primary"
      dark
      fixed
      app
    >
      <v-toolbar-title v-text="title" />

      <v-spacer />
      <v-text-field
        class="search-bar"
        prepend-inner-icon="search"
        label="Search"
        solo-inverted
        flat
        hide-details
        single-line
      />
      <v-spacer />

      <div v-if="adminLoggedIn==true">
        <v-btn
          flat
          to="/admin"
          @click="swapToAdminView()"
        >
          Admin Page
        </v-btn>
        <v-btn
          flat
          to="/"
          @click="attemptLogout()"
        >
          Logout
        </v-btn>
      </div>
      <div v-else-if="userLoggedIn==true">
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
        <!-- can use line below for the "info" symbol for providing login requirement info-->
        <!-- only works if we import and npm install the font awesome image library-->
        <i class="fas fa-info-circle" />
        <form>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            pattern="[a-z0-9A-Z._%+-]+@mail.umw.edu"
            title="Must be a valid UMW email address ending in @mail.umw.edu"
          >
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          >

          <v-btn
            flat
            type="submit"
            @click="attemptRegister()"
          >
            Register
          </v-btn>

          <v-btn
            flat
            type="submit"
            @click="attemptLogin()"
          >
            Login
          </v-btn>
        </form>
          <!-- /v-toolbar-items -->
        </v-text-field>
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
import { auth } from '~/plugins/firebase.js'

export default {
  data() {
    return {
      adminLoggedIn: false,
      userLoggedIn: false,
      placeholderVariable: false,
      title: 'UMW CPSC Internship Board',
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
      auth.createUserWithEmailAndPassword(this.email, this.password)
    },
    swapToAdminView: function () {
      /* make sure to validate/check for admin session token */
      this.placeholderVariable = true
    },
    navigateToReviewCreation: function () {

    }
  }
}
</script>

<style>
  .search-bar {
    max-width: 50vw;
  }
</style>
