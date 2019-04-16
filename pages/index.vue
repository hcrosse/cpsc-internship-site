<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout child-flex>
          <v-card>
            <div class="row">
              <div class="column left">
                <reviewListFullComponent />
              </div>
              <div class="column right">
                <img src="../img/map.jpg">
                <!-- insert GoogleMap Component here -->
              </div>
            </div>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>

import reviewListFullComponent from '~/components/reviewListFullComponent.vue'

export default {
  layout: 'default',
  components: {
    reviewListFullComponent
  },
  data() {
  },
  // Fetch currently does not work correctly
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
}
</script>
