<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-container class="log">
            <loginForm />
          </v-container>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>

import loginForm from '~/components/loginForm.vue'

export default {
  middleware: 'login-routes',
  layout: 'default',
  components: {
    loginForm
  },
  data() {
    return {
      name: 'login'
    }
  }
}
</script>

<style scoped>
  .log {
    max-width: 36em;
  }
</style>
