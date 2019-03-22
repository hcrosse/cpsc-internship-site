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
    return {
      testVariable: false
    }
  },
  methods: {
    exampleMethod(index) {
      this.testVariable = false
    }
  }
}
</script>
