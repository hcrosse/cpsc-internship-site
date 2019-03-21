<template>
  <div>
    <reviewListFullComponent />
    <!-- insert GoogleMap Component here.  Will likely need to mess with styling to get them sidebyside -->
  </div>
</template>

<script>

import reviewListFullComponent from '~/components/reviewListFullComponent.vue'

export default {
  layout: 'default',
  components: {
    reviewListFullComponent
  },
  data() {
    return {
      testVariable: false
    }
  },
  methods: {
    exampleMethod(index) {
      this.testVariable = false
    }
  }
}
</script>
