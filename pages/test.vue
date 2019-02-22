<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <logo />
      <vuetify-logo />
    </v-flex>
    <test />
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Test from '~/components/Test.vue'

export default {
  layout: 'testLayout',
  components: {
    Logo,
    VuetifyLogo,
    Test
  }
}
</script>
