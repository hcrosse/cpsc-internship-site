<style>
  .title {
    text-align: center;
    font-weight: normal;
  }

  .link {
    text-align: center;
    text-decoration: none;
  }
</style>

<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs24 sm24 md3>
            <v-card flat>
              <v-layout align-center justify-center column>
                <!-- logo goes here -->

                <p class="title">
                  Sign in
                </p>

                <form>
                  <v-text-field
                    v-model="email"
                    type="email"
                    autofocus
                    browser-autocomplete="email"
                    label="Email"
                    outline
                    :rules="[rules.required, rules.email]"
                  />

                  <v-text-field
                    v-model="password"
                    type="password"
                    browser-autocomplete="password"
                    counter
                    label="Password"
                    outline
                    :rules="[rules.required, rules.password]"
                  />

                  <v-list>
                    <a href="/password_reset" class="link">Forgot password?</a>
                  </v-list>

                  <a href="/register" class="link">Create account</a>
                  <v-spacer />
                  <v-btn>Sign in</v-btn>
                </form>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
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
  }
}
</script>
