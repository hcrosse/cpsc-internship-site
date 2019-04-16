import { getUserFromCookie, getUserFromSession } from '../plugins/cookies'

export const actions = {

  async nuxtServerInit({ dispatch }, { req }) {
    let user = getUserFromCookie(req)
    if (user) {
      await dispatch('modules/user/setUSER', { name: user.name, email: user.email, uid: user.user_id })
    } else {
      user = getUserFromSession(req)
      if (user) {
        await dispatch('modules/user/setUSER', { name: user.name, email: user.email, uid: user.user_id })
      }
    }
  }
}
