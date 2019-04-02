export default function ({ store, redirect, route }) {
  const getUser = store.getters.getUser
  let isAdmin = null
  if (getUser) {
    isAdmin = store.getters.isAdmin
  }

  if (getUser && route.name === 'login') {
    return redirect('/')
  } else if (!getUser && (isUserRoute(route) || isAdminRoute(route))) {
    return redirect('/login')
  } else if (!isAdmin && isAdminRoute(route)) {
    return redirect('/')
  }
}

function isUserRoute(route) {
  if (route.matched.some(record => record.path === '/submit')) {
    return true
  }
}

function isAdminRoute(route) {
  if (route.matched.some(record => record.path === '/admin')) {
    return true
  }
}
