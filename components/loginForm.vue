<template>
  <v-card elevation="1">
    <v-container align-center justify-center grid-list-xl>
      <!-- logo goes here -->

      <p class="title small-space">
        Sign in
      </p>

      <v-form>
        <v-text-field
          v-model="email"
          class="small-space padded"
          type="email"
          autofocus
          browser-autocomplete="email"
          label="Email"
          outline
          :rules="[rules.required, rules.email]"
          @input="validate"
        />

        <v-text-field
          v-model="password"
          class="tiny-space padded"
          type="password"
          browser-autocomplete="password"
          counter
          label="Password"
          outline
          :rules="[rules.required, rules.password]"
          @input="validate"
        />

        <div class="small-space padded">
          <a href="/password_reset" class="link">Forgot password?</a>
        </div>

        <div class="big-space padded">
          <a href="/register" class="link">Create account</a>

          <v-spacer />

          <v-btn
            class="text-xs-right"
            flat
            right
            :disabled="!valid"
          >
            Sign in
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      valid: false,
      rules: {
        required: value => !!value || 'Required',
        email: (value) => {
          const pattern = /(^[a-z0-9A-Z]{2,10}@(mail.)?umw.edu$)|(^jenniferpolack@gmail.com$)/
          return pattern.test(value) || 'Must be a valid UMW email'
        },
        password: (value) => {
          const pattern = /([\S]{8,})/
          return pattern.test(value) || 'Password must be at least 8 characters long'
        }
      }
    }
  },

  methods: {
    validate() {
      // ugly bc I don't know better
      const epat = /(^[a-z0-9A-Z]{2,10}@(mail.)?umw.edu$)|(^jenniferpolack@gmail.com$)/
      const ppat = /([\S]{8,})/
      this.valid = (epat.test(this.email) && ppat.test(this.password))
    }
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    font-weight: normal;
  }

  .link {
    text-align: center;
    text-decoration: none;
    font-weight: bold;
  }

  .v-btn {
    align-content: end;
    color: red;
  }

  .btn--active {
    background-color: #1A73E8;
    color: white;
  }

  .v-card {
    border-radius: 7px;
  }

  .bottom-space {
    padding-bottom: 1em;
  }

  .tiny-space {
    padding-top: .5em;
  }

  .small-space {
    padding-top: 1em;
  }

  .big-space {
    padding-top: 2em;
  }

  .padded {
    padding-left: 1em;
    padding-right: 1em;
  }

  /*.v-btn--active {*/
    /*color: #1A73E8 !important;*/
  /*}*/
</style>
