export default function ({ store, redirect, route }) {
  if (store.getter.getUser != null && route.name === 'login') {
    redirect('/')
  } else if (store.getter.getUser == null && (isUserRoute(route) || isAdminRoute(route))) {
    redirect('/login')
  } else if (!store.getter.isAdmin() && isAdminRoute(route)) {
    alert('poop')
    redirect('/')
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
