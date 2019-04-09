<template>
  <div class="reviewList">
    <p>{{ testVar }}</p>
    <v-list
      two-line
      style="max-height: 525px"
      class="scroll-y"
    >
      <template v-for="(review, index) in firestoreReviewsQuery">
        <v-list-tile
          :key="review.companyname"
          avatar
          ripple
          @click="openReview(index)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ review.companyname }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">
              {{ review.companyAddress }}
            </v-list-tile-sub-title>
            <v-list-tile-sub-title>{{ review.summary }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider
          v-if="index + 1 < firestoreReviewsQuery.length"
          :key="index"
        />
      </template>
    </v-list>
  </div>
</template>

<script>

export default {
  data() {
    return {
      reviewOpened: true,
      testVar: 'nothing',
      selected: [2],
      firestoreReviewsQuery: this.$parent.firestoreReviewsQuery
    }
  },
  methods: {
    openReview(index) {
      this.$parent.reviewOpened = true
      this.$parent.reviewIndexClicked = index
    }
  }
}
</script>
