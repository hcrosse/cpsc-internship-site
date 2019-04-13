<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout child-flex>
        <v-card>
          <div class="row">
            <div :style="{ width: computedAppendingWidth }" class="listColumns pendingList">
              <div class="listTitleDiv">
                <p class="listTitlePtag">
                  REVIEWS WAITING FOR APPROVAL
                </p>
                <hr>
              </div>
              <reviewListFullComponent :key="updateComponentsKey" review-status="pending" @message="updateAllComponents" />
            </div>
            <div :style="{ width: computedRejectedWidth }" class="listColumns rejectedList">
              <div class="listTitleDiv">
                <p class="listTitlePtag">
                  PREVIOUSLY REJECTED REVIEWS
                </p>
                <hr>
              </div>
              <reviewListFullComponent :key="updateComponentsKey" review-status="rejected" @message="updateAllComponents" />
            </div>
            <div :style="{ width: computedApprovedWidth }" class="listColumns approvedList">
              <div class="listTitleDiv">
                <p class="listTitlePtag">
                  PREVIOUSLY APPROVED REVIEWS
                </p>
                <hr>
              </div>
              <reviewListFullComponent :key="updateComponentsKey" review-status="approved" @message="updateAllComponents" />
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
      updateComponentsKey: 1,
      approvedDivWidth: 33,
      pendingDivWidth: 33,
      rejectedDivWidth: 33
    }
  },
  computed: {
    computedApprovedWidth: function () {
      return this.approvedDivWidth
    },
    computedPendingWidth: function () {
      return this.pendingDivWidth
    },
    computedRejectedWidth: function () {
      return this.rejectedDivWidth
    }
  },
  methods: {
    updateAllComponents: function () {
      // eslint-disable-next-line no-console
      console.log('in adminpage updateAllComponents method')
      // next line forces components with this key to update.  will refresh the tables
      this.updateComponentsKey = this.updateComponentsKey + 1
    },
    changeWidth: function () {
      this.width = '100px'
    }
  }
}
</script>

<style>

.listColumns {
  float: left;
  width: 33%;
  padding: 10px;
}

.listTitleDiv {
  background-color: #5e9bff;
}

.listTitlePtag {
  text-align: center;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 25px;
  letter-spacing: 0px;
  word-spacing: 2px;
  color: #000000;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
}

.pendingList {
  border: 5px solid yellow;
}

.rejectedList {
  border: 5px solid red;
}

.approvedList {
  border: 5px solid green;
}

</style>
