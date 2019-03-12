<template>
  <v-app
    light
  >
    <v-toolbar
      prominent
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />

      <div>
        <input v-model="message" placeholder="Username">
        <input v-model="message" placeholder="Password">
      </div>

      <div>
        <v-btn
          color="secondary"
          raised
          nuxt
          to="/inspire"
        >
          Register
        </v-btn>

        <v-btn
          color="secondary"
          raised
          nuxt
          to="/inspire"
        >
          Login
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
      clipped: false,
      fixed: false,
      title: 'UMW CPSC Internship Board'
    }
  }
}
</script>
