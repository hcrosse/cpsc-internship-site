<template>
  <div class="reviewList">
    <v-list
      two-line
      style="max-height: 525px"
      class="scroll-y"
    >
      <template v-for="(review, index) in firestoreReviewsQuery">
        <v-list-tile
          :key="review.id"
          avatar
          ripple
          @click="openReview(index)"
        >
          <div style="width:60%">
            <v-list-tile-content>
              <v-list-tile-title><b>{{ review.data.companyname }}</b></v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">
                {{ review.data.selectedEnvironment }}
              </v-list-tile-sub-title>
              <v-list-tile-sub-title><i>{{ review.data.summary }}</i></v-list-tile-sub-title>
            </v-list-tile-content>
          </div>
          <div style="width:40%; display: flex; justify-content: flex-end">
            <v-list-tile-action style="display:inline">
              <div v-if="review.data.selectedRating === 'Very Good'">
                <v-icon
                  color="yellow darken-2"
                >
                  star
                </v-icon>
                <v-icon
                  color="yellow darken-2"
                >
                  star
                </v-icon>
                <v-icon
                  color="yellow darken-2"
                >
                  star
                </v-icon>
              </div>
              <div v-if="review.data.selectedRating === 'Good'">
                <v-icon
                  color="yellow darken-2"
                >
                  star
                </v-icon>
                <v-icon
                  color="yellow darken-2"
                >
                  star
                </v-icon>
                <v-icon
                  color="grey lighten-1"
                >
                  star_border
                </v-icon>
              </div>
              <div v-if="review.data.selectedRating === 'Average'">
                <v-icon
                  color="yellow darken-2"
                >
                  star
                </v-icon>
                <v-icon
                  color="yellow darken-2"
                >
                  star_half
                </v-icon>
                <v-icon
                  color="grey lighten-1"
                >
                  star_border
                </v-icon>
              </div>
              <div v-if="review.data.selectedRating === 'Bad'">
                <v-icon
                  color="yellow darken-2"
                >
                  star
                </v-icon>
                <v-icon
                  color="grey lighten-1"
                >
                  star_border
                </v-icon>
                <v-icon
                  color="grey lighten-1"
                >
                  star_border
                </v-icon>
              </div>
              <div v-if="review.data.selectedRating === 'Very Bad'">
                <v-icon
                  color="yellow darken-2"
                >
                  star_half
                </v-icon>
                <v-icon
                  color="grey lighten-1"
                >
                  star_border
                </v-icon>
                <v-icon
                  color="grey lighten-1"
                >
                  star_border
                </v-icon>
              </div>
            </v-list-tile-action>
          </div>
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
      console.log('insideOpenReview')
      this.tellMapsToUpdate(index)
      this.$parent.reviewIndexClicked = index
      this.$parent.reviewOpened = true
    },
    tellMapsToUpdate(index) {
      // eslint-disable-next-line no-console
      console.log('inside rl tellmapstoupdate')
      // console.log(this.firestoreReviewsQuery[index].id)

      this.$emit('messagetorlfc', this.firestoreReviewsQuery[index].id)
    }
  }
}
</script>
