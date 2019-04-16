import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from '../plugins/firebase'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      user: null
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload
      }
    },
    actions: {
      login({ commit }, { em, pa }) {
        auth.signInWithEmailAndPassword(em, pa).then((user) => {
          commit('setUser', user)
          this.$router.push('/')
        }).catch((error) => {
          commit('setUser', null)
          const errorCode = error.code
          if (errorCode === 'auth/user-not-found') {
            alert('User not found. Please register an account.')
          } else if (errorCode === 'auth/wrong-password') {
            alert('Invalid password.')
          } else if (errorCode === 'auth/user-disabled') {
            alert('Account disabled.')
          }
        })
      },

      register({ commit }, { em, pa }) {
        auth.createUserWithEmailAndPassword(em, pa).then((user) => {
          commit('setUser', user)
          this.$router.push('/')
        }).catch((error) => {
          const errorCode = error.code
          if (errorCode === 'auth/email-already-in-use') {
            alert('Email already in use. Please sign in.')
          }
        })
      },

      logout({ commit }) {
        auth.signOut().then(() => {
          commit('setUser', null)
          this.$router.push('/')
        }).catch(() => {
          commit('setUser', null)
          this.$router.push('/')
        })
      },

      updateUser(state, { user }) {
        Vue.set(state, 'user', user)
      }
    },
    getters: {
      isUser(state) {
        return state.user != null
      },
      email: state => state.user.email,
      verified: state => state.user.emailVerified,
      isAdmin(state) {
        if (state.user != null) {
          return true
          // return state.user.email.match(/(jenniferpolack@gmail.com)|(hcrosse@mail.umw.edu)/)
        } else {
          return false
        }
      }
    }
  })
}

export default store
