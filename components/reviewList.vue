<template>
  <div class="reviewList">
    <v-app id="theList">
      <v-layout row>
        <v-flex xs12>
          <v-card>
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
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
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
          title: 'Netflix',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'Summer Engineering Intern',
          title: 'Netflix',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'Summer Engineering Intern',
          title: 'Netflix',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'Summer Engineering Intern',
          title: 'Netflix',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'Summer Engineering Intern',
          title: 'Netflix',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'Summer Engineering Intern',
          title: 'Netflix',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.'
        },
        {
          headline: 'Summer Engineering Intern',
          title: 'Netflix',
          subtitle: 'Details for job sentence 1. Details for job sentence 2. Details for job sentence 3.Details for job sentence 4. Details for job sentence 5. Details for job sentence 6.'
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
