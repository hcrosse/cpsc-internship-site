<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs24 sm24 md3>
            <loginForm />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>

import loginForm from '~/components/loginForm.vue'

export default {
  layout: 'default',
  components: {
    loginForm
  },
  data() {

  }
}
</script>
