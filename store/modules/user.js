// import Vue from 'vue'
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
    console.log('[STORE ACTIONS] - login')
    const token = await auth.currentUser.getIdToken(true)
    const userInfo = {
      name: user.displayName,
      email: user.email,
      uid: user.uid
    }

    Cookies.set('access_token', token) // saving token in cookie for server rendering
    await dispatch('setUSER', userInfo)
    await dispatch('saveUID', userInfo.uid)
    // Vue.forceUpdate()
    console.log('[STORE ACTIONS] - in login, response:', status)
  },

  async logout({ commit, dispatch }) {
    console.log('[STORE ACTIONS] - logout')
    await auth.signOut()

    Cookies.remove('access_token')
    commit('setUSER', null)
    commit('saveUID', null)
    // Vue.forceUpdate()
  },

  saveUID({ commit }, uid) {
    console.log('[STORE ACTIONS] - saveUID')
    commit('saveUID', uid)
  },

  setUSER({ commit }, user) {
    commit('setUSER', user)
  }

}

export const mutations = {
  saveUID(state, uid) {
    console.log('[STORE MUTATIONS] - saveUID:', uid)
    state.uid = uid
  },
  setUSER(state, user) {
    console.log('[STORE MUTATIONS] - setUSER:', user)
    state.user = user
  }
}
