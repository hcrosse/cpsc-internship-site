<template>
  <div class="fullcard">
    <div v-if="reviewOpened">
      <transition name="component-fade" mode="out-in">
        <singleReview @messagefromSR="messageToMaps" />
      </transition>
    </div>
    <div v-else>
      <transition name="component-fade" mode="out-in">
        <reviewList @messagetorlfc="messageToMaps" />
      </transition>
    </div>
  </div>
</template>

<script>

import singleReview from '~/components/singleReview.vue'
import reviewList from '~/components/reviewList.vue'
import { db } from '../plugins/firebase.js'

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
    const self = this
    db.collection('reviews').where('approvedByAdmin', '==', this.reviewStatus)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const review = {
            data: doc.data(),
            id: doc.id
          }
          self.firestoreReviewsQuery.push(review)
        })
      })
  },
  methods: {
    messageToMaps(docid) {
      // eslint-disable-next-line no-console
      console.log('inside rlfc messagetomaps')
      this.$emit('messagetomaps', docid)
    }
  }
}
</script>
