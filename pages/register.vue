<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-container class="log">
            <registerForm />
          </v-container>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>

import registerForm from '~/components/registerForm.vue'

export default {
  middleware: 'login-routes',
  layout: 'default',
  components: {
    registerForm
  },
  data() {
    return {
      name: 'register'
    }
  }
}
</script>

<style scoped>
  .log {
    max-width: 36em;
  }
</style>
