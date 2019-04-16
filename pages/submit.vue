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
  middleware: 'user-routes',
  layout: 'default',
  components: {
    reviewComponent
  },
  fetch({ store }) {
    // if (store.getters.isAdmin) {
    //   console.error('admin')
    // } else
    if (store.state.user) {
      console.error('user')
    } else {
      console.error('none')
    }
  }
  // Fetch currently does not work correctly
  // fetch({ store, redirect, route }) {
  //   if (!store.state.user) {
  //     return redirect('/')
  //   }
  // }
}
</script>
