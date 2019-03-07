<template>
  <div>
    <v-layout align-center justify-center row fill-height>
      <v-btn
        :disabled="prevDisabled"
        @click="prevPage()"
      >
        Prev page
      </v-btn>
      <v-btn
        :disabled="nextDisabled"
        @click="nextPage()"
      >
        Next page
      </v-btn>
    </v-layout>
    <div v-if="pageNumber==1">
      <part1 />
    </div>
    <div v-else-if="pageNumber==2">
      <part2 />
    </div>
    <div v-else-if="pageNumber==3">
      <part3 />
    </div>
    <div v-else-if="pageNumber==4">
      <part4 />
    </div>
  </div>
</template>

<script>
import part1 from '~/components/reviewPartOne.vue'
import part2 from '~/components/reviewPartTwo.vue'
import part3 from '~/components/reviewPartThree.vue'
import part4 from '~/components/reviewPartFour.vue'

export default {
  layout: 'default',
  components: {
    part1,
    part2,
    part3,
    part4
  },
  data() {
    return {
      pageNumber: 1,
      prevDisabled: true,
      nextDisabled: false
    }
  },
  methods: {
    nextPage: function () {
      if (this.pageNumber < 4) {
        this.pageNumber++
      }
      this.evaluateButtons()
    },
    prevPage: function () {
      if (this.pageNumber > 1) {
        this.pageNumber--
      }
      this.evaluateButtons()
    },
    evaluateButtons: function () {
      if (this.pageNumber <= 1) {
        this.prevDisabled = true
        this.nextDisabled = false
      } else if (this.pageNumber >= 4) {
        this.prevDisabled = false
        this.nextDisabled = true
      } else {
        this.prevDisabled = false
        this.nextDisabled = false
      }
    }
  }
}
</script>
