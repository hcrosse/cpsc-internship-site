<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout child-flex>
          <v-card>
            <div class="row">
              <div class="column left">
                <reviewListFullComponent :review-status="reviewStatus" />
              </div>
              <div class="column right">
                <GoogleMap />
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
import GoogleMap from '~/components/map.vue'

export default {
  layout: 'default',
  components: {
    reviewListFullComponent,
    GoogleMap
  },
  data() {
    return {
      testVariable: false,
      reviewStatus: 'pending'
    }
  },
  methods: {
    exampleMethod(index) {
      this.testVariable = false
    }
  }
}
</script>
