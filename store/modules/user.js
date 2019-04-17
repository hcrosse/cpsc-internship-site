import Cookies from 'js-cookie'
import { auth } from '../../plugins/firebase'

export const state = () => ({
  uid: null,
  user: null
})

export const getters = {

  uid(state) {
    if (state.user && state.user.uid) return state.user.uid
    else return null
  },

  user(state) {
    return state.user
  },

  isAuthenticated(state) {
    return !!state.user && !!state.user.uid
  },

  isVerified(state) {
    return state.user.emailVerified
  },

  isAdmin(state) {
    if (state.user) return state.user.email.match(/(jenniferpolack@gmail.com)|(hcrosse@mail.umw.edu)/)
    else return false
  }
}

export const actions = {

  async login({ dispatch, state }, user) {
    const token = await auth.currentUser.getIdToken(true)
    const userInfo = {
      name: user.displayName,
      email: user.email,
      uid: user.uid
    }

    Cookies.set('access_token', token) // saving token in cookie for server rendering
    await dispatch('setUSER', userInfo)
    await dispatch('saveUID', userInfo.uid)
  },

  register({ commit }, { em, pa }) {
    auth.createUserWithEmailAndPassword(em, pa).then(() => {
      this.$router.push('/')
    }).catch((error) => {
      console.log(error.toString())
      const errorCode = error.code
      if (errorCode === 'auth/email-already-in-use') {
        alert('Email already in use. Please sign in.')
      }
    })
  },

  async logout({ commit, dispatch }) {
    await auth.signOut()

    Cookies.remove('access_token')
    commit('setUSER', null)
    commit('saveUID', null)
  },

  saveUID({ commit }, uid) {
    commit('saveUID', uid)
  },

  setUSER({ commit }, user) {
    commit('setUSER', user)
  }

}

export const mutations = {
  saveUID(state, uid) {
    state.uid = uid
  },
  setUSER(state, user) {
    state.user = user
  }
}
