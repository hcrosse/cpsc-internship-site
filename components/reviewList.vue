<template>
  <div class="reviewList">
    <v-list
      two-line
      style="max-height: 525px"
      class="scroll-y"
    >
      <template v-for="(review, index) in firestoreReviewsQuery">
        <v-list-tile
          :key="review.data.companyname"
          avatar
          ripple
          @click="openReview(index)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ review.data.companyname }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">
              {{ review.data.companyAddress }}
            </v-list-tile-sub-title>
            <v-list-tile-sub-title>{{ review.data.summary }}</v-list-tile-sub-title>
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
      selected: [2],
      firestoreReviewsQuery: this.$parent.firestoreReviewsQuery
    }
  },
  methods: {
    openReview(index) {
      // eslint-disable-next-line no-console
      console.log(this.firestoreReviewsQuery[index].id)
      this.$parent.reviewIndexClicked = index
      this.$parent.reviewOpened = true
    }
  }
}
</script>
