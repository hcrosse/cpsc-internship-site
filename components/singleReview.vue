<template>
  <div>
    <p>REVIEW LIST INDEX CLICKED: {{ reviewIndexClicked }}</p>
    <v-btn
      @click="exampleMethod()"
    >
      BACK
    </v-btn>
  </div>
</template>

<script>

export default {
  data() {
    return {
      reviewOpened: true,
      selected: [2],
      reviewIndexClicked: this.$parent.reviewIndexClicked
    }
  },
  methods: {
    exampleMethod(index) {
      this.$parent.reviewOpened = false
    }
  }
}
</script>
