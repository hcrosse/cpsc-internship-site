<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout child-flex>
        <v-card>
          <div class="row">
            <div class="column pendingList">
              <p class="listTitlePtag">
                REVIEWS WAITING FOR APPROVAL
              </p>
              <reviewListFullComponent :key="updateComponentsKey" ref="pendingComponent" review-status="pending" @message="updateAllComponents" />
            </div>
            <div class="column rejectedList">
              <p class="listTitlePtag">
                PREVIOUSLY REJECTED REVIEWS
              </p>
              <reviewListFullComponent :key="updateComponentsKey" ref="rejectedComponent" review-status="rejected" @message="updateAllComponents" />
            </div>
            <div class="column approvedList">
              <p class="listTitlePtag">
                PREVIOUSLY APPROVED REVIEWS
              </p>
              <reviewListFullComponent :key="updateComponentsKey" ref="approvedComponent" review-status="approved" @message="updateAllComponents" />
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
      testvar: 'testvar text here',
      updateComponentsKey: 1
    }
  },
  methods: {
    updateAllComponents: function () {
      // eslint-disable-next-line no-console
      console.log('in adminpage updateAllComponents method')
      this.updateComponentsKey = this.updateComponentsKey + 1
    }
  }
}
</script>

<style>

.listTitlePtag {

}

.pendingList {
  width: 33%;
  border: 5px solid yellow;
}

.rejectedList {
  width: 33%;
  border: 5px solid red;
}

.approvedList {
  width: 33%;
  border: 5px solid green;
}

</style>
