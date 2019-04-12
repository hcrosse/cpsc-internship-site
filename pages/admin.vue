<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout child-flex>
        <v-card>
          <div class="row">
            <div class="column pendingList">
              <p>REVIEWS WAITING FOR APPROVAL</p>
              <reviewListFullComponent review-status="pending" />
            </div>
            <div class="column rejectedList">
              <p>PREVIOUSLY REJECTED REVIEWS</p>
              <reviewListFullComponent review-status="rejected" />
            </div>
          </div>
        </v-card>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>

import reviewListFullComponent from '~/components/adminComps/adminFullListComponent.vue'

export default {
  layout: 'default',
  components: {
    reviewListFullComponent
  },
  data() {
    return {
      testvar: 'testvar text here'
    }
  },
  methods: {
    test: function () {
      // eslint-disable-next-line no-console
      console.log('admin test function called, testvar text = ' + this.testvar)
    }
  }
}
</script>

<style>

.pendingList {
  width: 50%;
  border: 5px solid black;
}

.rejectedList {
  width: 50%;
  border: 5px solid red;
}

.approvedList {
  width: 50%;
  border: 5px solid red;
}

</style>
