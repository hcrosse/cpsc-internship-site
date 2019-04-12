<template>
  <div class="fullcard">
    <div v-if="reviewOpened">
      <transition name="component-fade" mode="out-in">
        <singleReview />
      </transition>
    </div>
    <div v-else>
      <transition name="component-fade" mode="out-in">
        <reviewList />
      </transition>
    </div>
  </div>
</template>

<script>

import singleReview from '~/components/adminComps/adminSingleReview.vue'
import reviewList from '~/components/adminComps/adminList.vue'
import { db } from '../../plugins/firebase.js'

export default {
  layout: 'default',
  components: {
    singleReview,
    reviewList
  },
  props: {
    reviewStatus: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      reviewOpened: false,
      reviewIndexClicked: -1,
      firestoreReviewsQuery: []
    }
  },
  beforeMount() {
    this.renewLists()
  },
  methods: {
    renewLists() {
      const self = this

      self.firestoreReviewsQuery = []

      db.collection('reviews').where('approvedByAdmin', '==', this.reviewStatus)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            const review = {
              data: doc.data(),
              id: doc.id
            }
            self.firestoreReviewsQuery.push(review) // had self
          })
        })
    },
    passDataToGrandParent() {
      /*
      if (this.reviewStatus === 'pending') {
      // eslint-disable-next-line no-console
        console.log('in pending')
        // this.$parent.pendingFirestoreReviewsQuery = this.firestoreReviewsQuery
      } else if (this.reviewStatus === 'rejected') {
      // eslint-disable-next-line no-console
        console.log('in rejected')
      // self.$parent.rejectedFirestoreReviewsQuery = self.firestoreReviewsQuery
      }
      */
    }
  }
}
</script>
