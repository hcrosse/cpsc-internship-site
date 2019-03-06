<template>
  <div>
    <div v-if="pageNumber==1">
      <v-btn @click="nextPage()">
        Next page
      </v-btn>
      <part1 />
    </div>
    <div v-else-if="pageNumber==2">
      <v-btn @click="prevPage()">
        Prev page
      </v-btn>
      <v-btn @click="nextPage()">
        Next page
      </v-btn>
      <part2 />
    </div>
    <div v-else-if="pageNumber==3">
      <v-btn @click="prevPage()">
        Prev page
      </v-btn>
      <v-btn @click="nextPage()">
        Next page
      </v-btn>
      <part3 />
    </div>
    <div v-else-if="pageNumber==4">
      <v-btn @click="prevPage()">
        Prev page
      </v-btn>
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
      pageNumber: 1
    }
  },
  methods: {
    nextPage: function () {
      if (this.pageNumber < 4) {
        this.pageNumber++
      }
    },
    prevPage: function () {
      if (this.pageNumber > 1) {
        this.pageNumber--
      }
    }
  }
}
</script>
