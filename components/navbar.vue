<template>
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
        outline
        to="/admin"
      >
        Admin
      </v-btn>

      <v-btn
        flat
        outline
        to="/"
        @click="attemptLogout()"
      >
        Logout
      </v-btn>
    </div>
    <div v-else-if="isAuthenticated">
      <v-btn
        flat
        outline
        to="/submit"
      >
        Submit Review
      </v-btn>

      <v-btn
        flat
        outline:
        true
        to="/"
        @click="attemptLogout()"
      >
        Logout
      </v-btn>
    </div>
    <div v-else>
      <v-btn
        flat
        outline
        to="/login"
      >
        Sign In
      </v-btn>

      <v-btn
        flat
        outline
        to="/register"
      >
        Register
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: 'CPSC Internship Site'
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

<style scoped>

</style>
