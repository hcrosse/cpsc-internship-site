<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout child-flex>
        <v-card>
          <reviewComponent />
        </v-card>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import reviewComponent from '~/components/reviewComponent.vue'

export default {
  middleware: 'user-routes',
  layout: 'default',
  components: {
    reviewComponent
  }
}
</script>
