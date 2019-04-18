<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout child-flex>
          <v-card>
            <br>
            <h3 style="text-align: center">
              Welcome to the UMW Computer Science Internship Review webpage.<br>
              This website provides UMW students the ability to read and write internship reviews for companies that other students have worked for.
            </h3>
            <hr>
            <br>
            <div class="row">
              <div class="column left">
                <reviewListFullComponent review-status="approved" @messagetomaps="updateMaps" />
              </div>
              <div class="column right">
                <GoogleMap ref="googleMapRef" />
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
      testVariable: false
    }
  },
  methods: {
    exampleMethod(index) {
      this.testVariable = false
    },
    updateMaps(docId) {
      this.$refs.googleMapRef.findPositionByDocId(docId)
    }
    /*  //Test function to update all reviews in database by button click.
        //replace dateReviewAdded: currentTime
            //with what you want all reviews to add, and call this function on a button
    ,
    testfunction() {
      db.collection('reviews')
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let currentTime = new Date()
            const reviewReference = db.collection('reviews').doc(doc.id)
            return reviewReference.update({
              dateReviewAdded: currentTime
            })
          })
        })
    }
    */
  }
}
</script>
