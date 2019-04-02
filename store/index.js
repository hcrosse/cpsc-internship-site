import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from '../plugins/firebase'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    // state: {
    //   user: null,
    //   email: 'fred',
    //   verified: false,
    //   admin: false
    // },
    // getters: {
    //   user: state => state.user,
    //   email: state => state.email,
    //   verified: state => state.verified,
    //   admin: state => state.admin
    // },
    // mutations: {
    //   init(state, payload) {
    //     if (payload) {
    //       state.user = payload
    //       state.email = payload.email
    //       state.verified = payload.emailVerified
    //       state.admin = this.email.match(/(jenniferpolack@gmail.com)|(hcrosse@mail.umw.edu)/)
    //     } else {
    //       state.user = null
    //       state.email = 'potato'
    //       state.verified = false
    //       state.admin = false
    //     }
    //   }
    // },
    // actions: {
    //   login({ commit }, payload) {
    //     const { em, pa } = payload
    //     // return auth.signInWithEmailAndPassword(em, pa)
    //     return new Promise((resolve, reject) => {
    //       auth.signInWithEmailAndPassword(em, pa).then((response) => {
    //         resolve(response)
    //       }).catch((error) => {
    //         reject(error)
    //       })
    //     })
    //   },
    //
    //   register: function ({ commit }, payload) {
    //     const { em, pa } = payload
    //     return auth.createUserWithEmailAndPassword(em, pa).then((user) => {
    //       commit('init', user)
    //     })
    //   },
    //
    //   logout({ commit }) {
    //     auth.signOut().then(() => {
    //       commit('init', null)
    //     }).catch(err => alert(err.message))
    //   },
    //
    //   set({ commit }, payload) {
    //     commit('init', payload)
    //   }
    // }
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
      }
    },
    getters: {
      getUser(state) {
        return state.user
      },
      getEmail(state) {
        return state.user.email
      },
      isVerified(state) {
        return state.user.emailVerified
      },
      isAdmin(state) {
        return state.user.email.match(/(jenniferpolack@gmail.com)|(hcrosse@mail.umw.edu)/)
      }
    }
  })
}

export default createStore
