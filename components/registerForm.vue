<template>
  <v-card elevation="1">
    <v-container align-center justify-center grid-list-xl>
      <!-- logo goes here -->

      <p class="title small-space">
        Register
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
          @keyup.enter="register"
        />

        <div class="big-space l-pad opposite">
          <a href="/login" class="link small-space">Sign in</a>

          <v-btn
            v-if="valid"
            class="active-btn"
            flat
            right
            @click="register"
          >
            Register
          </v-btn>
          <v-btn
            v-else
            flat
            right
            disabled
          >
            Register
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
          const pattern = /(^[a-z0-9A-Z]{2,10}@(mail.)?umw.edu$)/
          return pattern.test(value) || 'Must be a valid UMW email'
        },
        password: (value) => {
          const pattern = /([\S]{8,})/
          return pattern.test(value) || 'Password must be at least 8 characters'
        }
      }
    }
  },

  methods: {
    validate: function () {
      // ugly bc I don't know better
      const epat = /(^[a-z0-9A-Z]{2,10}@(mail.)?umw.edu$)/
      const ppat = /([\S]{8,})/
      this.valid = (epat.test(this.email) && ppat.test(this.password))
    },
    register: function () {
      const em = this.email
      const pa = this.password
      this.$store.dispatch('modules/user/register', { em, pa })
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

  .active-btn {
    background-color: #1A73E8;
    color: white;
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

  .l-pad {
    padding-left: 1em;
  }

  .opposite {
    display: flex;
    justify-content: space-between;
  }
</style>
