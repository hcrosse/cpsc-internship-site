<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout child-flex>
        <v-card>
          <reviewComponent />
        </v-card>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import reviewComponent from '~/components/reviewComponent.vue'

export default {
  layout: 'default',
  components: {
    reviewComponent
  },
  // Fetch currently does not work correctly
  fetch({ store, redirect, route }) {
    if (!store.state.user && route.path.match(/\/submit/)) {
      return redirect('/')
    }
  }
}
</script>
