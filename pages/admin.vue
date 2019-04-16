<template>
  <v-layout>
    <v-flex text-xs-center>
      <blockquote class="blockquote">
        &#8220;ADMIN PAGE UNDER CONSTRUCTION&#8221;
        <footer>
          <small>
            <em>&mdash;Development Team</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: 'router-auth',
  data() {
    return {
      placeholderVariable: false
    }
  },
  // Fetch currently does not work correctly
  // async fetch({ store, redirect }) {
  //   // if (!store.getters.isAdmin) {
  //   //   return redirect('/login')
  //   // }
  //   const adm = await store.state.user
  //   if (adm) {
  //     redirect('/login')
  //   } else {
  //     redirect('/register')
  //   }
  // },
  methods: {
    pullReviewsToValidate: function () {
      /* make absolutely sure there is a valid ADMIN session token stored */
    }
  }
}
</script>
