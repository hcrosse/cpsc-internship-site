export default function ({ store, redirect, route }) {
  // let us = store.getters.getUser
  // if (us === null && route.name === 'submit') {
  //   redirect('/login')
  // }
  // store.state.user != null && route.name === 'login' ? redirect('/admin') : ''
  // store.state.user == null && isAdminRoute(route) ? redirect('/login') : ''
  if (route.path === '/admin' && !store.getters.getUser) {
    redirect('/')
  }
}

// function isAdminRoute(route) {
//   if (route.matched.some(record => record.path === '/admin')) {
//     return true
//   }
// }
