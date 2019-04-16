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

      <div v-if="isAdmin">
        <v-btn
          flat
          outline="true"
          to="/admin"
        >
          Admin
        </v-btn>

        <v-btn
          flat
          outline="true"
          to="/"
          @click="attemptLogout()"
        >
          Logout
        </v-btn>
      </div>
      <div v-else-if="isAuthenticated">
        <v-btn
          flat
          outline="true"
          to="/submit"
        >
          Submit Review
        </v-btn>

        <v-btn
          flat
          outline="true"
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
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: 'CPSC Internship Site',
      fixed: false,
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters('modules/user', [
      'isAuthenticated',
      'isAdmin'
    ])
  },
  methods: {
    home: function () {
      this.$router.push('/')
    },
    ...mapActions('modules/user', [ 'logout' ]),
    attemptLogout: async function () {
      await this.logout()
      this.$router.push('/')
    }
  }
}
</script>
