<template>
  <div class="reviewList">
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-list-tile
          :key="item.title"
          avatar
          ripple
          @click="openReview(index)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">
              {{ item.headline }}
            </v-list-tile-sub-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider
          v-if="index + 1 < items.length"
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
      selected: [2],
      items: [
        {
          headline: 'Engineering Intern',
          title: 'Google',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'Software Team Intern',
          title: 'Apple',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'Student Researcher',
          title: 'Facebook',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'IT Intern',
          title: 'Amazon',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'Summer Engineering Intern',
          title: 'NASA',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'Intern',
          title: 'Uber',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'Coffee Fetcher',
          title: 'Capital One',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        }
      ]
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
